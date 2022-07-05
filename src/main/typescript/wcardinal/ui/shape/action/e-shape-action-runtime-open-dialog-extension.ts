/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeRuntime, EShapeRuntimeReset } from "../e-shape-runtime";
import { EShapeActionExpression } from "./e-shape-action-expression";
import { EShapeActionExpressions } from "./e-shape-action-expressions";
import { EShapeActionOpenDialogExtensions } from "./e-shape-action-open-dialog-extensions";
import { EShapeActionOpenDialogOpener } from "./e-shape-action-open-dialog-opener";
import { EShapeActionRuntimeConditional } from "./e-shape-action-runtime-conditional";
import { EShapeActionValueOpenDialogExtension } from "./e-shape-action-value-open-dialog-extension";

export class EShapeActionRuntimeOpenDialogExtension extends EShapeActionRuntimeConditional {
	protected readonly target: EShapeActionExpression<string | null>;
	protected readonly opener?: EShapeActionOpenDialogOpener;

	constructor(value: EShapeActionValueOpenDialogExtension) {
		super(value, EShapeRuntimeReset.NONE);
		this.target = EShapeActionExpressions.ofStringOrNull(value.target);
		const extension = EShapeActionOpenDialogExtensions.get(value.type);
		if (extension) {
			this.opener = extension.opener;
		}
	}

	execute(shape: EShape, runtime: EShapeRuntime, time: number): void {
		const opener = this.opener;
		if (opener) {
			if (this.condition(shape, time)) {
				const target = this.target(shape, time);
				if (target != null) {
					setTimeout(() => {
						opener(target, shape);
					}, 0);
				}
			}
		}
	}
}
