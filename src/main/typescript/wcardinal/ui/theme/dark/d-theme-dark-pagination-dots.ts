/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseStateSet } from "../../d-base-state-set";
import { DCoordinateSize } from "../../d-coordinate";
import { DThemePaginationDots } from "../../d-pagination-dots";
import { DThemeDarkAtlas } from "./d-theme-dark-atlas";
import { DThemeDarkImageBase } from "./d-theme-dark-image-base";

/* eslint-disable prettier/prettier */
DThemeDarkAtlas.add("pagination_dots", 21, 21,
	`<g>` +
		`<circle cx="2" cy="15" r="1.1" fill="#fff" stroke="none" />` +
		`<circle cx="10.5" cy="15" r="1.1" fill="#fff" stroke="none" />` +
		`<circle cx="19" cy="15" r="1.1" fill="#fff" stroke="none" />` +
	`</g>`
);
/* eslint-enable prettier/prettier */

export class DThemeDarkPaginationDots
	extends DThemeDarkImageBase<string>
	implements DThemePaginationDots
{
	getWidth(): DCoordinateSize {
		return 30;
	}

	getHeight(): DCoordinateSize {
		return 30;
	}

	newState(state: DBaseStateSet): void {
		super.newState(state);
		state.isFocusable = false;
	}

	getImageSource(state: DBaseStateSet): PIXI.Texture | PIXI.DisplayObject | null {
		return DThemeDarkAtlas.mappings.pagination_dots;
	}
}
