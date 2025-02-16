/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeResourceManagerDeserialization } from "./e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "./e-shape-resource-manager-serialization";
import { EShapeDataValue } from "./e-shape-data-value";
import { EShapeDataValueRange } from "./e-shape-data-value-range";
import { EShapeDataMapping } from "./e-shape-data-mapping";
import { EShapeDataValueType } from "./e-shape-data-value-type";
import { EShapeDataValueScope } from "./e-shape-data-value-scope";
import { EShapeDataScoped } from "./e-shape-data-scoped";
import { EShapeDataValueState } from "./e-shape-data-value-state";
import { EShapeDataSystem } from "./e-shape-data-system";

export interface EShapeData {
	readonly values: EShapeDataValue[];
	isChanged: boolean;

	// Shortcuts
	readonly id: string;
	readonly as: string;
	readonly type: EShapeDataValueType;
	readonly scope: EShapeDataValueScope;
	readonly initial: string;
	readonly format: string;
	readonly range: EShapeDataValueRange;
	value: unknown;
	readonly nvalue: number;
	time: number;
	state: EShapeDataValueState;
	capacity: number;

	readonly alias: Record<string, EShapeDataValue>;

	readonly mapping: EShapeDataMapping;
	getMapping(): EShapeDataMapping | undefined;

	readonly private: EShapeDataScoped;
	getPrivate(): EShapeDataScoped | undefined;

	readonly system: EShapeDataSystem;
	getSystem(): EShapeDataSystem | undefined;

	add(value: EShapeDataValue, index?: number): void;
	set(index: number, value: EShapeDataValue): EShapeDataValue | null;
	indexOf(target: EShapeDataValue): number;
	get(index: number): EShapeDataValue | null;
	remove(index: number): void;
	size(): number;
	swap(indexA: number, indexB: number): void;

	copy(target: EShapeData): this;
	serialize(manager: EShapeResourceManagerSerialization): number;
	deserialize(target: number, manager: EShapeResourceManagerDeserialization): void;
}
