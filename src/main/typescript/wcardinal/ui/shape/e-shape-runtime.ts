/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { interaction, Point, Renderer } from "pixi.js";
import InteractionEvent = interaction.InteractionEvent;
import InteractionManager = interaction.InteractionManager;
import { DApplications } from "../d-applications";
import { UtilKeyboardEvent } from "../util/util-keyboard-event";
import { EShapeActionRuntime } from "./action/e-shape-action-runtime";
import { EShape } from "./e-shape";
import { EShapeFillLike } from "./e-shape-fill";
import { EShapeState } from "./e-shape-state";
import { EShapeStrokeLike } from "./e-shape-stroke";
import { EShapeTextLike } from "./e-shape-text";
import { DBaseState } from "../d-base-state";
import { DBaseStateSet } from "../d-base-state-set";

const POSITION_X = 1;
const POSITION_Y = 2;
const ROTATION = 4;
const COLOR_FILL = 8;
const COLOR_STROKE = 16;
const COLOR_TEXT = 32;
const COLOR_TEXT_OUTLINE = 64;
const VISIBILITY = 128;
const HEIGHT = 256;
const WIDTH = 512;
const TEXT = 1024;
const CURSOR = 2048;

export const EShapeRuntimeReset = {
	NONE: 0,
	POSITION_X,
	POSITION_Y,
	POSITION: POSITION_X | POSITION_Y,
	ROTATION,
	COLOR_FILL,
	COLOR_STROKE,
	COLOR_FILL_AND_STROKE: COLOR_FILL | COLOR_STROKE,
	COLOR_TEXT,
	COLOR_TEXT_OUTLINE,
	COLOR: COLOR_FILL | COLOR_STROKE | COLOR_TEXT | COLOR_TEXT_OUTLINE,
	VISIBILITY,
	HEIGHT,
	WIDTH,
	SIZE: HEIGHT | WIDTH,
	TEXT,
	CURSOR
} as const;

export type EShapeRuntimeReset = typeof EShapeRuntimeReset[keyof typeof EShapeRuntimeReset];

export class EShapeRuntime {
	x: number;
	y: number;
	size: Point;
	rotation: number;
	actions: EShapeActionRuntime[];
	fill: EShapeFillLike;
	stroke: EShapeStrokeLike;
	text: EShapeTextLike;
	cursor?: string;

	reset: EShapeRuntimeReset;
	written: EShapeRuntimeReset;

	effect: number;

	isStateChanged: boolean;
	interactive: boolean;

	constructor(shape: EShape) {
		const transform = shape.transform;
		const position = transform.position;
		this.x = position.x;
		this.y = position.y;
		const size = shape.size;
		this.size = new Point(size.x, size.y);
		this.rotation = transform.rotation;
		this.actions = [];
		this.fill = shape.fill.toObject();
		this.stroke = shape.stroke.toObject();
		this.text = shape.text.toObject();
		this.cursor = shape.cursor;
		this.reset = EShapeRuntimeReset.NONE;
		this.written = EShapeRuntimeReset.NONE;
		this.effect = NaN;
		this.isStateChanged = false;
		this.interactive = false;
	}

	initialize(shape: EShape): void {
		shape.disallowUploadedUpdate();
		this.onInitialize(shape);
		shape.allowUploadedUpdate();
	}

	onInitialize(shape: EShape): void {
		const actions = this.actions;
		for (let i = 0, imax = actions.length; i < imax; ++i) {
			actions[i].initialize(shape, this);
		}
	}

	isActionable(): boolean {
		return 0 < this.actions.length;
	}

	onClick(shape: EShape, e: InteractionEvent | KeyboardEvent): void {
		const state = shape.state;
		if (state.isActionable) {
			state.isClicked = true;
		}
	}

	onDblClick(
		shape: EShape,
		e: MouseEvent | TouchEvent,
		interactionManager: InteractionManager
	): boolean {
		const actions = this.actions;
		for (let i = 0, imax = actions.length; i < imax; ++i) {
			actions[i].onDblClick(shape, this, e, interactionManager);
		}
		return false;
	}

	onOver(shape: EShape, e: InteractionEvent): void {
		shape.state.isHovered = true;
	}

	onOut(shape: EShape, e: InteractionEvent): void {
		shape.state.isHovered = false;
	}

	onDown(shape: EShape, e: InteractionEvent | KeyboardEvent): void {
		// Actions
		const actions = this.actions;
		for (let i = 0, imax = actions.length; i < imax; ++i) {
			actions[i].onDowning(shape, this, e);
		}

		if (!shape.state.isDown) {
			// Down / Press
			shape.state.addAll(EShapeState.DOWN, DBaseState.PRESSED);

			// Focus and states
			const layer = DApplications.getLayer(shape);
			if (layer) {
				// Focus
				const focusController = layer.getFocusController();
				focusController.focus(focusController.findParent(shape));
			}
		}

		// Actions
		for (let i = 0, imax = actions.length; i < imax; ++i) {
			actions[i].onDown(shape, this, e);
		}
	}

	onUp(shape: EShape, e: InteractionEvent | KeyboardEvent): void {
		const state = shape.state;
		if (!state.isUp) {
			state.set(EShapeState.UP, DBaseState.PRESSED);
		}
	}

	onUpOutside(shape: EShape, e: InteractionEvent): void {
		shape.state.isPressed = false;
	}

	onMove(shape: EShape, e: InteractionEvent): void {
		const actions = this.actions;
		for (let i = 0, imax = actions.length; i < imax; ++i) {
			actions[i].onMove(shape, this, e);
		}
	}

	onKeyDown(shape: EShape, e: KeyboardEvent): boolean {
		if (UtilKeyboardEvent.isActivateKey(e)) {
			this.onDown(shape, e);
		}
		return false;
	}

	onKeyUp(shape: EShape, e: KeyboardEvent): boolean {
		if (UtilKeyboardEvent.isActivateKey(e)) {
			const state = shape.state;
			if (state.isPressed) {
				const wasUp = state.isUp;
				this.onUp(shape, e);
				if (!wasUp && state.isUp) {
					this.onClick(shape, e);
				}
			}
		}
		return false;
	}

	onStateChange(shape: EShape, newState: DBaseStateSet, oldState: DBaseStateSet): void {
		this.isStateChanged = true;
		DApplications.update(shape);

		if (newState.isFocused) {
			if (!oldState.isFocused) {
				this.onFocus(shape);
			}
		} else if (oldState.isFocused) {
			this.onBlur(shape);
		}
	}

	onFocus(shape: EShape): void {
		const actions = this.actions;
		for (let i = 0, imax = actions.length; i < imax; ++i) {
			actions[i].onFocus(shape, this);
		}
	}

	onBlur(shape: EShape): void {
		const actions = this.actions;
		for (let i = 0, imax = actions.length; i < imax; ++i) {
			actions[i].onBlur(shape, this);
		}
	}

	update(shape: EShape, time: number): void {
		const data = shape.data;
		const isEffectTimeUp = this.effect <= time;
		if (data.isChanged || this.isStateChanged || isEffectTimeUp) {
			this.isStateChanged = false;
			data.isChanged = false;
			if (isEffectTimeUp) {
				this.effect = NaN;
			}
			shape.disallowUploadedUpdate();
			this.onUpdate(shape, time);
			shape.allowUploadedUpdate();
			const wasStateChanged = this.isStateChanged;
			shape.state.removeAll(
				EShapeState.CLICKED,
				EShapeState.DOWN,
				EShapeState.UP,
				EShapeState.ACTIVATED,
				EShapeState.DEACTIVATED
			);
			this.isStateChanged = wasStateChanged;
		}
	}

	onRender(shape: EShape, time: number, renderer: Renderer): void {
		const actions = this.actions;
		for (let i = 0, imax = actions.length; i < imax; ++i) {
			actions[i].onRender(shape, this, time, renderer);
		}
		this.update(shape, time);
	}

	protected onUpdate(shape: EShape, time: number): void {
		const actions = this.actions;
		if (0 < actions.length) {
			this.written = EShapeRuntimeReset.NONE;
			for (let i = 0, imax = actions.length; i < imax; ++i) {
				actions[i].execute(shape, this, time);
			}
			this.doReset(shape);
		}
	}

	protected doReset(shape: EShape): void {
		const target = ~this.written & this.reset;
		if (target !== EShapeRuntimeReset.NONE) {
			if (target & EShapeRuntimeReset.POSITION_X) {
				shape.transform.position.x = this.x;
			}
			if (target & EShapeRuntimeReset.POSITION_Y) {
				shape.transform.position.y = this.y;
			}
			if (target & EShapeRuntimeReset.VISIBILITY) {
				shape.visible = true;
			}
			if (target & EShapeRuntimeReset.COLOR_FILL) {
				const fill = this.fill;
				shape.fill.set(undefined, fill.color, fill.alpha);
			}
			if (target & EShapeRuntimeReset.COLOR_STROKE) {
				const stroke = this.stroke;
				shape.stroke.set(undefined, stroke.color, stroke.alpha);
			}
			if (target & EShapeRuntimeReset.COLOR_TEXT) {
				const text = this.text;
				shape.text.set(undefined, text.color, text.alpha);
			}
			if (target & EShapeRuntimeReset.COLOR_TEXT_OUTLINE) {
				const outline = this.text.outline;
				shape.text.outline.set(undefined, outline.color, outline.alpha);
			}
			if (target & EShapeRuntimeReset.HEIGHT) {
				shape.size.y = this.size.y;
			}
			if (target & EShapeRuntimeReset.WIDTH) {
				shape.size.x = this.size.x;
			}
			if (target & EShapeRuntimeReset.ROTATION) {
				shape.transform.rotation = this.rotation;
			}
			if (target & EShapeRuntimeReset.TEXT) {
				shape.text.value = this.text.value;
			}
			if (target & EShapeRuntimeReset.CURSOR) {
				shape.cursor = this.cursor;
			}
		}
	}
}
