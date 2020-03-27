/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject, Texture } from "pixi.js";
import { DBaseState } from "../../d-base-state";
import { DBaseStates } from "../../d-base-states";
import { DThemeButtonCheck } from "../../d-button-check";
import { UtilRgb } from "../../util/util-rgb";
import { DThemeDarkAtlas } from "./d-theme-dark-atlas";
import { DThemeDarkButtonAmbient } from "./d-theme-dark-button-ambient";
import { DThemeDarkConstants } from "./d-theme-dark-constants";
import { DThemeDarkFont } from "./d-theme-dark-font";

// Material Design icons by Google.
// Apache license version 2.0.
DThemeDarkAtlas.add( "button_check_mark_on", 21, 21,
	`<g transform="scale(0.875,0.875)">` +
		`<path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89` +
			`-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="#fff" />` +
	`</g>`
);

DThemeDarkAtlas.add( "button_check_mark_off", 21, 21,
	`<g transform="scale(0.875,0.875)">` +
		`<path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" ` +
			`fill="#fff" />` +
	`</g>`
);

export class DThemeDarkButtonCheck extends DThemeDarkButtonAmbient implements DThemeButtonCheck {

	COLOR = 0x131313;

	getBackgroundColor( state: DBaseState ): number | null {
		if( DBaseStates.isDisabled( state ) ) {
			return UtilRgb.blend( 0x000000, 0xFFFFFF, DThemeDarkConstants.DISABLED_ALPHA );
		}
		if( DBaseStates.isFocused( state ) || DBaseStates.isHovered( state ) ) {
			return UtilRgb.blend( this.COLOR, this.getColor( DBaseState.HOVERED ), DThemeDarkConstants.FOCUSED_ALPHA );
		}
		if( DBaseStates.isActive( state ) ) {
			return UtilRgb.blend( this.COLOR, this.getColor( DBaseState.ACTIVE ), DThemeDarkConstants.ACTIVE_ALPHA );
		}
		return null;
	}

	getImageTintColor( state: DBaseState ): number | null {
		if( DBaseStates.isDisabled( state ) || DBaseStates.isReadOnly( state ) || ! DBaseStates.isActive( state ) ) {
			return DThemeDarkFont.getColor( state );
		}
		return DThemeDarkConstants.HIGHLIGHT_COLOR;
	}

	isToggle(): boolean {
		return true;
	}

	getImageSource( state: DBaseState ): Texture | DisplayObject | null {
		if( DBaseStates.isActive( state ) ) {
			return DThemeDarkAtlas.mappings.button_check_mark_on;
		}
		return DThemeDarkAtlas.mappings.button_check_mark_off;
	}
}
