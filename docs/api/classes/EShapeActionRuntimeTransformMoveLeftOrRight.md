[Winter Cardinal UI - v0.227.0](../index.md) / EShapeActionRuntimeTransformMoveLeftOrRight

# Class: EShapeActionRuntimeTransformMoveLeftOrRight

An action runtime.
Please note that all the action runtimes are shared across shapes.

## Hierarchy

- [`EShapeActionRuntimeTransformMove`](EShapeActionRuntimeTransformMove.md)

  ↳ **`EShapeActionRuntimeTransformMoveLeftOrRight`**

## Table of contents

### Constructors

- [constructor](EShapeActionRuntimeTransformMoveLeftOrRight.md#constructor)

### Properties

- [amount](EShapeActionRuntimeTransformMoveLeftOrRight.md#amount)
- [condition](EShapeActionRuntimeTransformMoveLeftOrRight.md#condition)
- [reset](EShapeActionRuntimeTransformMoveLeftOrRight.md#reset)

### Methods

- [execute](EShapeActionRuntimeTransformMoveLeftOrRight.md#execute)
- [initialize](EShapeActionRuntimeTransformMoveLeftOrRight.md#initialize)
- [onBlur](EShapeActionRuntimeTransformMoveLeftOrRight.md#onblur)
- [onDblClick](EShapeActionRuntimeTransformMoveLeftOrRight.md#ondblclick)
- [onDown](EShapeActionRuntimeTransformMoveLeftOrRight.md#ondown)
- [onDowning](EShapeActionRuntimeTransformMoveLeftOrRight.md#ondowning)
- [onFocus](EShapeActionRuntimeTransformMoveLeftOrRight.md#onfocus)
- [onMove](EShapeActionRuntimeTransformMoveLeftOrRight.md#onmove)
- [onRender](EShapeActionRuntimeTransformMoveLeftOrRight.md#onrender)

## Constructors

### constructor

• **new EShapeActionRuntimeTransformMoveLeftOrRight**(`value`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`EShapeActionValueTransformMove`](EShapeActionValueTransformMove.md) |

#### Overrides

[EShapeActionRuntimeTransformMove](EShapeActionRuntimeTransformMove.md).[constructor](EShapeActionRuntimeTransformMove.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-transform-move-left-or-right.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-transform-move-left-or-right.ts#L13)

## Properties

### amount

• `Protected` `Readonly` **amount**: [`EShapeActionExpression`](../index.md#eshapeactionexpression)<`number`\>

#### Inherited from

[EShapeActionRuntimeTransformMove](EShapeActionRuntimeTransformMove.md).[amount](EShapeActionRuntimeTransformMove.md#amount)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-transform-move.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-transform-move.ts#L13)

___

### condition

• `Protected` `Readonly` **condition**: [`EShapeActionExpression`](../index.md#eshapeactionexpression)<`boolean`\>

#### Inherited from

[EShapeActionRuntimeTransformMove](EShapeActionRuntimeTransformMove.md).[condition](EShapeActionRuntimeTransformMove.md#condition)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-conditional.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-conditional.ts#L13)

___

### reset

• **reset**: `number`

#### Inherited from

[EShapeActionRuntimeTransformMove](EShapeActionRuntimeTransformMove.md).[reset](EShapeActionRuntimeTransformMove.md#reset)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L17)

## Methods

### execute

▸ **execute**(`shape`, `runtime`, `time`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](EShapeRuntime.md) |
| `time` | `number` |

#### Returns

`void`

#### Overrides

[EShapeActionRuntimeTransformMove](EShapeActionRuntimeTransformMove.md).[execute](EShapeActionRuntimeTransformMove.md#execute)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-transform-move-left-or-right.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-transform-move-left-or-right.ts#L17)

___

### initialize

▸ **initialize**(`shape`, `runtime`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](EShapeRuntime.md) |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeTransformMove](EShapeActionRuntimeTransformMove.md).[initialize](EShapeActionRuntimeTransformMove.md#initialize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L23)

___

### onBlur

▸ **onBlur**(`shape`, `runtime`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](EShapeRuntime.md) |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeTransformMove](EShapeActionRuntimeTransformMove.md).[onBlur](EShapeActionRuntimeTransformMove.md#onblur)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L35)

___

### onDblClick

▸ **onDblClick**(`shape`, `runtime`, `e`, `interactionManager`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](EShapeRuntime.md) |
| `e` | `MouseEvent` \| `TouchEvent` |
| `interactionManager` | `InteractionManager` |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeTransformMove](EShapeActionRuntimeTransformMove.md).[onDblClick](EShapeActionRuntimeTransformMove.md#ondblclick)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:51](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L51)

___

### onDown

▸ **onDown**(`shape`, `runtime`, `e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](EShapeRuntime.md) |
| `e` | `InteractionEvent` \| `KeyboardEvent` |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeTransformMove](EShapeActionRuntimeTransformMove.md).[onDown](EShapeActionRuntimeTransformMove.md#ondown)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L43)

___

### onDowning

▸ **onDowning**(`shape`, `runtime`, `e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](EShapeRuntime.md) |
| `e` | `InteractionEvent` \| `KeyboardEvent` |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeTransformMove](EShapeActionRuntimeTransformMove.md).[onDowning](EShapeActionRuntimeTransformMove.md#ondowning)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L39)

___

### onFocus

▸ **onFocus**(`shape`, `runtime`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](EShapeRuntime.md) |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeTransformMove](EShapeActionRuntimeTransformMove.md).[onFocus](EShapeActionRuntimeTransformMove.md#onfocus)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L31)

___

### onMove

▸ **onMove**(`shape`, `runtime`, `e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](EShapeRuntime.md) |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeTransformMove](EShapeActionRuntimeTransformMove.md).[onMove](EShapeActionRuntimeTransformMove.md#onmove)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L47)

___

### onRender

▸ **onRender**(`shape`, `runtime`, `time`, `renderer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](EShapeRuntime.md) |
| `time` | `number` |
| `renderer` | `Renderer` |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeTransformMove](EShapeActionRuntimeTransformMove.md).[onRender](EShapeActionRuntimeTransformMove.md#onrender)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:60](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L60)
