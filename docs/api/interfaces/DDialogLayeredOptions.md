[Winter Cardinal UI - v0.227.0](../index.md) / DDialogLayeredOptions

# Interface: DDialogLayeredOptions<VALUE, THEME, EMITTER\>

[DDialogLayered](../classes/DDialogLayered.md) options.

## Type parameters

| Name | Type |
| :------ | :------ |
| `VALUE` | `unknown` |
| `THEME` | extends [`DThemeDialogLayered`](DThemeDialogLayered.md) = [`DThemeDialogLayered`](DThemeDialogLayered.md) |
| `EMITTER` | `any` |

## Hierarchy

- [`DDialogOptions`](DDialogOptions.md)<`THEME`\>

  ↳ **`DDialogLayeredOptions`**

  ↳↳ [`DDialogConfirmOptions`](DDialogConfirmOptions.md)

  ↳↳ [`DDialogFittedOptions`](DDialogFittedOptions.md)

  ↳↳ [`DDialogInputOptions`](DDialogInputOptions.md)

  ↳↳ [`DDialogSelectOptions`](DDialogSelectOptions.md)

## Table of contents

### Properties

- [align](DDialogLayeredOptions.md#align)
- [animation](DDialogLayeredOptions.md#animation)
- [background](DDialogLayeredOptions.md#background)
- [border](DDialogLayeredOptions.md#border)
- [children](DDialogLayeredOptions.md#children)
- [clear](DDialogLayeredOptions.md#clear)
- [closeOn](DDialogLayeredOptions.md#closeon)
- [content](DDialogLayeredOptions.md#content)
- [corner](DDialogLayeredOptions.md#corner)
- [cursor](DDialogLayeredOptions.md#cursor)
- [footer](DDialogLayeredOptions.md#footer)
- [gesture](DDialogLayeredOptions.md#gesture)
- [header](DDialogLayeredOptions.md#header)
- [height](DDialogLayeredOptions.md#height)
- [interactive](DDialogLayeredOptions.md#interactive)
- [layout](DDialogLayeredOptions.md#layout)
- [mode](DDialogLayeredOptions.md#mode)
- [name](DDialogLayeredOptions.md#name)
- [on](DDialogLayeredOptions.md#on)
- [outline](DDialogLayeredOptions.md#outline)
- [padding](DDialogLayeredOptions.md#padding)
- [parent](DDialogLayeredOptions.md#parent)
- [shadow](DDialogLayeredOptions.md#shadow)
- [shortcut](DDialogLayeredOptions.md#shortcut)
- [shortcuts](DDialogLayeredOptions.md#shortcuts)
- [state](DDialogLayeredOptions.md#state)
- [sticky](DDialogLayeredOptions.md#sticky)
- [theme](DDialogLayeredOptions.md#theme)
- [title](DDialogLayeredOptions.md#title)
- [visible](DDialogLayeredOptions.md#visible)
- [weight](DDialogLayeredOptions.md#weight)
- [width](DDialogLayeredOptions.md#width)
- [x](DDialogLayeredOptions.md#x)
- [y](DDialogLayeredOptions.md#y)

## Properties

### align

• `Optional` **align**: ``null`` \| ``"TOP"`` \| ``"RIGHT"`` \| ``"BOTTOM"`` \| ``"LEFT"`` \| ``"TOP_LEFT"`` \| ``"TOP_CENTER"`` \| ``"TOP_RIGHT"`` \| ``"BOTTOM_LEFT"`` \| ``"BOTTOM_CENTER"`` \| ``"BOTTOM_RIGHT"`` \| ``"LEFT_TOP"`` \| ``"LEFT_MIDDLE"`` \| ``"LEFT_BOTTOM"`` \| ``"RIGHT_TOP"`` \| ``"RIGHT_MIDDLE"`` \| ``"RIGHT_BOTTOM"`` \| ``"OVER"`` \| [`UtilAttachAlign`](../index.md#utilattachalign-1)

#### Inherited from

[DDialogOptions](DDialogOptions.md).[align](DDialogOptions.md#align)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:72](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L72)

___

### animation

• `Optional` **animation**: [`DAnimation`](DAnimation.md)<[`DBase`](../classes/DBase.md)<[`DThemeBase`](DThemeBase.md), [`DBaseOptions`](DBaseOptions.md)<[`DThemeBase`](DThemeBase.md), `any`\>\>\>

#### Inherited from

[DDialogOptions](DDialogOptions.md).[animation](DDialogOptions.md#animation)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:61](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L61)

___

### background

• `Optional` **background**: [`DBaseBackgroundOptions`](DBaseBackgroundOptions.md)

A background options.

#### Inherited from

[DDialogOptions](DDialogOptions.md).[background](DDialogOptions.md#background)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:462](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L462)

___

### border

• `Optional` **border**: [`DBaseBorderOptions`](DBaseBorderOptions.md)

A border options.

#### Inherited from

[DDialogOptions](DDialogOptions.md).[border](DDialogOptions.md#border)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:465](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L465)

___

### children

• `Optional` **children**: (``null`` \| `DisplayObject`)[]

Children.

#### Inherited from

[DDialogOptions](DDialogOptions.md).[children](DDialogOptions.md#children)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:374](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L374)

___

### clear

• `Optional` **clear**: `number` \| ``"NONE"`` \| ``"BOTH"`` \| ``"BEFORE"`` \| ``"AFTER"``

A clear type used by [DLayoutVertical](../classes/DLayoutVertical.md) and [DLayoutHorizontal](../classes/DLayoutHorizontal.md).

#### Inherited from

[DDialogOptions](DDialogOptions.md).[clear](DDialogOptions.md#clear)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:474](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L474)

___

### closeOn

• `Optional` **closeOn**: `number` \| ``"NONE"`` \| ``"ESC"`` \| ``"CLICK_OUTSIDE"`` \| (``"NONE"`` \| ``"ESC"`` \| ``"CLICK_OUTSIDE"``)[]

#### Inherited from

[DDialogOptions](DDialogOptions.md).[closeOn](DDialogOptions.md#closeon)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:59](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L59)

___

### content

• `Optional` **content**: [`DDialogLayeredContentOptions`](DDialogLayeredContentOptions.md)<[`DThemeDialogLayeredContent`](DThemeDialogLayeredContent.md)\>

Content options.

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:64](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L64)

___

### corner

• `Optional` **corner**: `number` \| [`DBaseCornerOptions`](DBaseCornerOptions.md)

A corner options.

#### Inherited from

[DDialogOptions](DDialogOptions.md).[corner](DDialogOptions.md#corner)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:437](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L437)

___

### cursor

• `Optional` **cursor**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`string`\>

A cursor shape.

#### Inherited from

[DDialogOptions](DDialogOptions.md).[cursor](DDialogOptions.md#cursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:477](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L477)

___

### footer

• `Optional` **footer**: ``null`` \| [`DDialogLayeredFooterOptions`](DDialogLayeredFooterOptions.md)<[`DThemeDialogLayeredFooter`](DThemeDialogLayeredFooter.md)\>

A footer options.

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:69](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L69)

___

### gesture

• `Optional` **gesture**: `boolean` \| [`DDialogGestureOptions`](DDialogGestureOptions.md)

#### Inherited from

[DDialogOptions](DDialogOptions.md).[gesture](DDialogOptions.md#gesture)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:70](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L70)

___

### header

• `Optional` **header**: ``null`` \| [`DDialogLayeredHeaderOptions`](DDialogLayeredHeaderOptions.md)<[`DThemeDialogLayeredHeader`](DThemeDialogLayeredHeader.md)\>

A header options.

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:59](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L59)

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

[DDialogOptions](DDialogOptions.md).[height](DDialogOptions.md#height)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:417](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L417)

___

### interactive

• `Optional` **interactive**: `number` \| ``"NONE"`` \| ``"CHILDREN"`` \| ``"SELF"`` \| ``"BOTH"``

An interactivity option.

#### Inherited from

[DDialogOptions](DDialogOptions.md).[interactive](DDialogOptions.md#interactive)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:431](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L431)

___

### layout

• `Optional` **layout**: [`DLayoutVerticalOptions`](DLayoutVerticalOptions.md)<[`DThemeLayoutVertical`](DThemeLayoutVertical.md)\>

A layout options.

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L54)

___

### mode

• `Optional` **mode**: ``"MODAL"`` \| ``"MODELESS"`` \| ``"MENU"`` \| [`DDialogMode`](../index.md#ddialogmode-1)

A dialog mode.

#### Inherited from

[DDialogOptions](DDialogOptions.md).[mode](DDialogOptions.md#mode)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:66](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L66)

___

### name

• `Optional` **name**: `string`

A name.

#### Inherited from

[DDialogOptions](DDialogOptions.md).[name](DDialogOptions.md#name)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:377](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L377)

___

### on

• `Optional` **on**: [`DDialogLayeredOnOptions`](DDialogLayeredOnOptions.md)<`VALUE`, `EMITTER`\>

Mappings of event names and handlers.

#### Overrides

[DDialogOptions](DDialogOptions.md).[on](DDialogOptions.md#on)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:74](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L74)

___

### outline

• `Optional` **outline**: [`DBaseOutlineOptions`](DBaseOutlineOptions.md)

An outline options.

#### Inherited from

[DDialogOptions](DDialogOptions.md).[outline](DDialogOptions.md#outline)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:468](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L468)

___

### padding

• `Optional` **padding**: `number` \| [`DBasePaddingOptions`](DBasePaddingOptions.md)

A padding options.

#### Inherited from

[DDialogOptions](DDialogOptions.md).[padding](DDialogOptions.md#padding)

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

[DDialogOptions](DDialogOptions.md).[parent](DDialogOptions.md#parent)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:371](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L371)

___

### shadow

• `Optional` **shadow**: ``null`` \| [`DBaseShadow`](../index.md#dbaseshadow)

A shadow.

#### Inherited from

[DDialogOptions](DDialogOptions.md).[shadow](DDialogOptions.md#shadow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:471](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L471)

___

### shortcut

• `Optional` **shortcut**: `string` \| [`UtilKeyboardEventShortcut`](UtilKeyboardEventShortcut.md)

A shortcut option.

#### Inherited from

[DDialogOptions](DDialogOptions.md).[shortcut](DDialogOptions.md#shortcut)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:456](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L456)

___

### shortcuts

• `Optional` **shortcuts**: (`string` \| [`UtilKeyboardEventShortcut`](UtilKeyboardEventShortcut.md))[]

A shortcut options.

#### Inherited from

[DDialogOptions](DDialogOptions.md).[shortcuts](DDialogOptions.md#shortcuts)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:459](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L459)

___

### state

• `Optional` **state**: `string` \| `string`[]

A default state.

#### Inherited from

[DDialogOptions](DDialogOptions.md).[state](DDialogOptions.md#state)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:428](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L428)

___

### sticky

• `Optional` **sticky**: `boolean`

#### Inherited from

[DDialogOptions](DDialogOptions.md).[sticky](DDialogOptions.md#sticky)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:68](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L68)

___

### theme

• `Optional` **theme**: `string` \| `THEME`

A theme or a theme name.

#### Inherited from

[DDialogOptions](DDialogOptions.md).[theme](DDialogOptions.md#theme)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:440](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L440)

___

### title

• `Optional` **title**: `string`

A tooltip text.

#### Inherited from

[DDialogOptions](DDialogOptions.md).[title](DDialogOptions.md#title)

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

[DDialogOptions](DDialogOptions.md).[visible](DDialogOptions.md#visible)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:425](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L425)

___

### weight

• `Optional` **weight**: `number`

A weight used by [DLayoutVertical](../classes/DLayoutVertical.md) and [DLayoutHorizontal](../classes/DLayoutHorizontal.md).

#### Inherited from

[DDialogOptions](DDialogOptions.md).[weight](DDialogOptions.md#weight)

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

[DDialogOptions](DDialogOptions.md).[width](DDialogOptions.md#width)

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

[DDialogOptions](DDialogOptions.md).[x](DDialogOptions.md#x)

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

[DDialogOptions](DDialogOptions.md).[y](DDialogOptions.md#y)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:397](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L397)
