[Winter Cardinal UI - v0.227.0](../index.md) / EShapeActionRuntimeTransformResizeHeightRelative

# Class: EShapeActionRuntimeTransformResizeHeightRelative

An action runtime.
Please note that all the action runtimes are shared across shapes.

## Hierarchy

- [`EShapeActionRuntimeTransformResize`](EShapeActionRuntimeTransformResize.md)

  ↳ **`EShapeActionRuntimeTransformResizeHeightRelative`**

## Table of contents

### Constructors

- [constructor](EShapeActionRuntimeTransformResizeHeightRelative.md#constructor)

### Properties

- [condition](EShapeActionRuntimeTransformResizeHeightRelative.md#condition)
- [origin](EShapeActionRuntimeTransformResizeHeightRelative.md#origin)
- [reset](EShapeActionRuntimeTransformResizeHeightRelative.md#reset)
- [size](EShapeActionRuntimeTransformResizeHeightRelative.md#size)

### Methods

- [adjustPosition](EShapeActionRuntimeTransformResizeHeightRelative.md#adjustposition)
- [execute](EShapeActionRuntimeTransformResizeHeightRelative.md#execute)
- [initialize](EShapeActionRuntimeTransformResizeHeightRelative.md#initialize)
- [onBlur](EShapeActionRuntimeTransformResizeHeightRelative.md#onblur)
- [onDblClick](EShapeActionRuntimeTransformResizeHeightRelative.md#ondblclick)
- [onDown](EShapeActionRuntimeTransformResizeHeightRelative.md#ondown)
- [onDowning](EShapeActionRuntimeTransformResizeHeightRelative.md#ondowning)
- [onFocus](EShapeActionRuntimeTransformResizeHeightRelative.md#onfocus)
- [onMove](EShapeActionRuntimeTransformResizeHeightRelative.md#onmove)
- [onRender](EShapeActionRuntimeTransformResizeHeightRelative.md#onrender)

## Constructors

### constructor

• **new EShapeActionRuntimeTransformResizeHeightRelative**(`value`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`EShapeActionValueTransformResize`](EShapeActionValueTransformResize.md) |

#### Overrides

[EShapeActionRuntimeTransformResize](EShapeActionRuntimeTransformResize.md).[constructor](EShapeActionRuntimeTransformResize.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-transform-resize-height-relative.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-transform-resize-height-relative.ts#L16)

## Properties

### condition

• `Protected` `Readonly` **condition**: [`EShapeActionExpression`](../index.md#eshapeactionexpression)<`boolean`\>

#### Inherited from

[EShapeActionRuntimeTransformResize](EShapeActionRuntimeTransformResize.md).[condition](EShapeActionRuntimeTransformResize.md#condition)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-conditional.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-conditional.ts#L13)

___

### origin

• `Protected` **origin**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-transform-resize-height-relative.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-transform-resize-height-relative.ts#L14)

___

### reset

• **reset**: `number`

#### Inherited from

[EShapeActionRuntimeTransformResize](EShapeActionRuntimeTransformResize.md).[reset](EShapeActionRuntimeTransformResize.md#reset)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L17)

___

### size

• `Protected` `Readonly` **size**: [`EShapeActionExpression`](../index.md#eshapeactionexpression)<`number`\>

#### Inherited from

[EShapeActionRuntimeTransformResize](EShapeActionRuntimeTransformResize.md).[size](EShapeActionRuntimeTransformResize.md#size)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-transform-resize.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-transform-resize.ts#L15)

## Methods

### adjustPosition

▸ `Protected` **adjustPosition**(`shape`, `runtime`, `dsx`, `dsy`, `originX`, `originY`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](EShapeRuntime.md) |
| `dsx` | `number` |
| `dsy` | `number` |
| `originX` | `number` |
| `originY` | `number` |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeTransformResize](EShapeActionRuntimeTransformResize.md).[adjustPosition](EShapeActionRuntimeTransformResize.md#adjustposition)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-transform-resize.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-transform-resize.ts#L43)

___

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

[EShapeActionRuntimeTransformResize](EShapeActionRuntimeTransformResize.md).[execute](EShapeActionRuntimeTransformResize.md#execute)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-transform-resize-height-relative.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-transform-resize-height-relative.ts#L22)

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

[EShapeActionRuntimeTransformResize](EShapeActionRuntimeTransformResize.md).[initialize](EShapeActionRuntimeTransformResize.md#initialize)

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

[EShapeActionRuntimeTransformResize](EShapeActionRuntimeTransformResize.md).[onBlur](EShapeActionRuntimeTransformResize.md#onblur)

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

[EShapeActionRuntimeTransformResize](EShapeActionRuntimeTransformResize.md).[onDblClick](EShapeActionRuntimeTransformResize.md#ondblclick)

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

[EShapeActionRuntimeTransformResize](EShapeActionRuntimeTransformResize.md).[onDown](EShapeActionRuntimeTransformResize.md#ondown)

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

[EShapeActionRuntimeTransformResize](EShapeActionRuntimeTransformResize.md).[onDowning](EShapeActionRuntimeTransformResize.md#ondowning)

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

[EShapeActionRuntimeTransformResize](EShapeActionRuntimeTransformResize.md).[onFocus](EShapeActionRuntimeTransformResize.md#onfocus)

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

[EShapeActionRuntimeTransformResize](EShapeActionRuntimeTransformResize.md).[onMove](EShapeActionRuntimeTransformResize.md#onmove)

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

[EShapeActionRuntimeTransformResize](EShapeActionRuntimeTransformResize.md).[onRender](EShapeActionRuntimeTransformResize.md#onrender)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:60](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L60)
