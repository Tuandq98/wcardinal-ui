/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeChartCoordinateTransform } from "../../d-chart-coordinate-transform";

export class DThemeDarkChartCoordinateTransform implements DThemeChartCoordinateTransform {
	isZero(value: number): boolean {
		return Math.abs(value) < 0.00001;
	}
}
