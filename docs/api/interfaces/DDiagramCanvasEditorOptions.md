[Winter Cardinal UI - v0.227.0](../index.md) / DDiagramCanvasEditorOptions

# Interface: DDiagramCanvasEditorOptions<THEME\>

[DBase](../classes/DBase.md) options.

## Type parameters

| Name | Type |
| :------ | :------ |
| `THEME` | extends [`DThemeDiagramCanvasEditor`](DThemeDiagramCanvasEditor.md) = [`DThemeDiagramCanvasEditor`](DThemeDiagramCanvasEditor.md) |

## Hierarchy

- [`DDiagramCanvasBaseOptions`](DDiagramCanvasBaseOptions.md)<`THEME`\>

  ↳ **`DDiagramCanvasEditorOptions`**

## Table of contents

### Properties

- [ambient](DDiagramCanvasEditorOptions.md#ambient)
- [background](DDiagramCanvasEditorOptions.md#background)
- [border](DDiagramCanvasEditorOptions.md#border)
- [children](DDiagramCanvasEditorOptions.md#children)
- [clear](DDiagramCanvasEditorOptions.md#clear)
- [corner](DDiagramCanvasEditorOptions.md#corner)
- [cursor](DDiagramCanvasEditorOptions.md#cursor)
- [height](DDiagramCanvasEditorOptions.md#height)
- [interactive](DDiagramCanvasEditorOptions.md#interactive)
- [name](DDiagramCanvasEditorOptions.md#name)
- [on](DDiagramCanvasEditorOptions.md#on)
- [outline](DDiagramCanvasEditorOptions.md#outline)
- [padding](DDiagramCanvasEditorOptions.md#padding)
- [parent](DDiagramCanvasEditorOptions.md#parent)
- [shadow](DDiagramCanvasEditorOptions.md#shadow)
- [shortcut](DDiagramCanvasEditorOptions.md#shortcut)
- [shortcuts](DDiagramCanvasEditorOptions.md#shortcuts)
- [snap](DDiagramCanvasEditorOptions.md#snap)
- [state](DDiagramCanvasEditorOptions.md#state)
- [theme](DDiagramCanvasEditorOptions.md#theme)
- [tile](DDiagramCanvasEditorOptions.md#tile)
- [title](DDiagramCanvasEditorOptions.md#title)
- [visible](DDiagramCanvasEditorOptions.md#visible)
- [weight](DDiagramCanvasEditorOptions.md#weight)
- [width](DDiagramCanvasEditorOptions.md#width)
- [x](DDiagramCanvasEditorOptions.md#x)
- [y](DDiagramCanvasEditorOptions.md#y)

## Properties

### ambient

• `Optional` **ambient**: `boolean`

#### Inherited from

[DDiagramCanvasBaseOptions](DDiagramCanvasBaseOptions.md).[ambient](DDiagramCanvasBaseOptions.md#ambient)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-base.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-base.ts#L24)

___

### background

• `Optional` **background**: [`DDiagramCanvasBackgroundOptions`](DDiagramCanvasBackgroundOptions.md)

A background options.

#### Inherited from

[DDiagramCanvasBaseOptions](DDiagramCanvasBaseOptions.md).[background](DDiagramCanvasBaseOptions.md#background)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-base.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-base.ts#L23)

___

### border

• `Optional` **border**: [`DBaseBorderOptions`](DBaseBorderOptions.md)

A border options.

#### Inherited from

[DDiagramCanvasBaseOptions](DDiagramCanvasBaseOptions.md).[border](DDiagramCanvasBaseOptions.md#border)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:465](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L465)

___

### children

• `Optional` **children**: (``null`` \| `DisplayObject`)[]

Children.

#### Inherited from

[DDiagramCanvasBaseOptions](DDiagramCanvasBaseOptions.md).[children](DDiagramCanvasBaseOptions.md#children)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:374](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L374)

___

### clear

• `Optional` **clear**: `number` \| ``"NONE"`` \| ``"BOTH"`` \| ``"BEFORE"`` \| ``"AFTER"``

A clear type used by [DLayoutVertical](../classes/DLayoutVertical.md) and [DLayoutHorizontal](../classes/DLayoutHorizontal.md).

#### Inherited from

[DDiagramCanvasBaseOptions](DDiagramCanvasBaseOptions.md).[clear](DDiagramCanvasBaseOptions.md#clear)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:474](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L474)

___

### corner

• `Optional` **corner**: `number` \| [`DBaseCornerOptions`](DBaseCornerOptions.md)

A corner options.

#### Inherited from

[DDiagramCanvasBaseOptions](DDiagramCanvasBaseOptions.md).[corner](DDiagramCanvasBaseOptions.md#corner)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:437](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L437)

___

### cursor

• `Optional` **cursor**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`string`\>

A cursor shape.

#### Inherited from

[DDiagramCanvasBaseOptions](DDiagramCanvasBaseOptions.md).[cursor](DDiagramCanvasBaseOptions.md#cursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:477](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L477)

___

### height

• `Optional` **height**: [`DCoordinateSize`](../index.md#dcoordinatesize)

One of the followings:
* A height
* A size keyword
* A size expression (Parsed by [DScalarExpression](../classes/DScalarExpression.md))
* A function returning a hight ([DScalarFunction](../index.md#dscalarfunction))
* An object returning a hight ([DScalar](DScalar.md))

#### Inherited from

[DDiagramCanvasBaseOptions](DDiagramCanvasBaseOptions.md).[height](DDiagramCanvasBaseOptions.md#height)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:417](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L417)

___

### interactive

• `Optional` **interactive**: `number` \| ``"NONE"`` \| ``"CHILDREN"`` \| ``"SELF"`` \| ``"BOTH"``

An interactivity option.

#### Inherited from

[DDiagramCanvasBaseOptions](DDiagramCanvasBaseOptions.md).[interactive](DDiagramCanvasBaseOptions.md#interactive)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:431](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L431)

___

### name

• `Optional` **name**: `string`

A name.

#### Inherited from

[DDiagramCanvasBaseOptions](DDiagramCanvasBaseOptions.md).[name](DDiagramCanvasBaseOptions.md#name)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:377](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L377)

___

### on

• `Optional` **on**: [`DBaseOnOptions`](DBaseOnOptions.md)<`any`\>

Mappings of event names and event handlers.

#### Inherited from

[DDiagramCanvasBaseOptions](DDiagramCanvasBaseOptions.md).[on](DDiagramCanvasBaseOptions.md#on)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:445](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L445)

___

### outline

• `Optional` **outline**: [`DBaseOutlineOptions`](DBaseOutlineOptions.md)

An outline options.

#### Inherited from

[DDiagramCanvasBaseOptions](DDiagramCanvasBaseOptions.md).[outline](DDiagramCanvasBaseOptions.md#outline)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:468](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L468)

___

### padding

• `Optional` **padding**: `number` \| [`DBasePaddingOptions`](DBasePaddingOptions.md)

A padding options.

#### Inherited from

[DDiagramCanvasBaseOptions](DDiagramCanvasBaseOptions.md).[padding](DDiagramCanvasBaseOptions.md#padding)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:434](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L434)

___

### parent

• `Optional` **parent**: `Container`

A parent.

In the case of UI classes which pop up (e.g., [DDialog](../classes/DDialog.md) and [DMenu](../classes/DMenu.md)),
if multiple application instances are there, better to set
this to an `application.stage` so that they pick a right application.
By default, they assume the last created application is
the one they belong to at the time when they are created.

#### Inherited from

[DDiagramCanvasBaseOptions](DDiagramCanvasBaseOptions.md).[parent](DDiagramCanvasBaseOptions.md#parent)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:371](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L371)

___

### shadow

• `Optional` **shadow**: ``null`` \| [`DBaseShadow`](../index.md#dbaseshadow)

A shadow.

#### Inherited from

[DDiagramCanvasBaseOptions](DDiagramCanvasBaseOptions.md).[shadow](DDiagramCanvasBaseOptions.md#shadow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:471](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L471)

___

### shortcut

• `Optional` **shortcut**: `string` \| [`UtilKeyboardEventShortcut`](UtilKeyboardEventShortcut.md)

A shortcut option.

#### Inherited from

[DDiagramCanvasBaseOptions](DDiagramCanvasBaseOptions.md).[shortcut](DDiagramCanvasBaseOptions.md#shortcut)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:456](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L456)

___

### shortcuts

• `Optional` **shortcuts**: (`string` \| [`UtilKeyboardEventShortcut`](UtilKeyboardEventShortcut.md))[]

A shortcut options.

#### Inherited from

[DDiagramCanvasBaseOptions](DDiagramCanvasBaseOptions.md).[shortcuts](DDiagramCanvasBaseOptions.md#shortcuts)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:459](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L459)

___

### snap

• `Optional` **snap**: [`DDiagramCanvasEditorSnapOptions`](DDiagramCanvasEditorSnapOptions.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-editor.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-editor.ts#L29)

___

### state

• `Optional` **state**: `string` \| `string`[]

A default state.

#### Inherited from

[DDiagramCanvasBaseOptions](DDiagramCanvasBaseOptions.md).[state](DDiagramCanvasBaseOptions.md#state)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:428](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L428)

___

### theme

• `Optional` **theme**: `string` \| `THEME`

A theme or a theme name.

#### Inherited from

[DDiagramCanvasBaseOptions](DDiagramCanvasBaseOptions.md).[theme](DDiagramCanvasBaseOptions.md#theme)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:440](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L440)

___

### tile

• `Optional` **tile**: [`DDiagramCanvasTileOptions`](DDiagramCanvasTileOptions.md)

#### Inherited from

[DDiagramCanvasBaseOptions](DDiagramCanvasBaseOptions.md).[tile](DDiagramCanvasBaseOptions.md#tile)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-base.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-base.ts#L22)

___

### title

• `Optional` **title**: `string`

A tooltip text.

#### Inherited from

[DDiagramCanvasBaseOptions](DDiagramCanvasBaseOptions.md).[title](DDiagramCanvasBaseOptions.md#title)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:453](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L453)

___

### visible

• `Optional` **visible**: `boolean`

A visibility.
Set to true to make [DBase](../classes/DBase.md) visible.
Set to false to make [DBase](../classes/DBase.md) invisible.
The default values is true.

#### Inherited from

[DDiagramCanvasBaseOptions](DDiagramCanvasBaseOptions.md).[visible](DDiagramCanvasBaseOptions.md#visible)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:425](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L425)

___

### weight

• `Optional` **weight**: `number`

A weight used by [DLayoutVertical](../classes/DLayoutVertical.md) and [DLayoutHorizontal](../classes/DLayoutHorizontal.md).

#### Inherited from

[DDiagramCanvasBaseOptions](DDiagramCanvasBaseOptions.md).[weight](DDiagramCanvasBaseOptions.md#weight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:450](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L450)

___

### width

• `Optional` **width**: [`DCoordinateSize`](../index.md#dcoordinatesize)

One of the followings:
* A width
* A size keyword
* A size expression (Parsed by [DScalarExpression](../classes/DScalarExpression.md))
* A function returning a width ([DScalarFunction](../index.md#dscalarfunction))
* An object returning a width ([DScalar](DScalar.md))

#### Inherited from

[DDiagramCanvasBaseOptions](DDiagramCanvasBaseOptions.md).[width](DDiagramCanvasBaseOptions.md#width)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:407](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L407)

___

### x

• `Optional` **x**: [`DCoordinatePosition`](../index.md#dcoordinateposition)

One of the followings:
* A X position
* A position keyword
* A position expression (Parsed by [DScalarExpression](../classes/DScalarExpression.md))
* A function returning a X position ([DScalarFunction](../index.md#dscalarfunction))
* An object returning a X position ([DScalar](DScalar.md))

#### Inherited from

[DDiagramCanvasBaseOptions](DDiagramCanvasBaseOptions.md).[x](DDiagramCanvasBaseOptions.md#x)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:387](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L387)

___

### y

• `Optional` **y**: [`DCoordinatePosition`](../index.md#dcoordinateposition)

One of the followings:
* A Y position
* A position keyword
* A position expresion (Parsed by [DScalarExpression](../classes/DScalarExpression.md))
* A function returning a Y position ([DScalarFunction](../index.md#dscalarfunction))
* An object returning a Y position ([DScalar](DScalar.md))

#### Inherited from

[DDiagramCanvasBaseOptions](DDiagramCanvasBaseOptions.md).[y](DDiagramCanvasBaseOptions.md#y)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:397](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L397)
