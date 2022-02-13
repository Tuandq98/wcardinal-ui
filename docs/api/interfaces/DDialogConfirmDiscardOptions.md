[Winter Cardinal UI - v0.155.0](../index.md) / DDialogConfirmDiscardOptions

# Interface: DDialogConfirmDiscardOptions<THEME\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `THEME` | extends [`DThemeDialogConfirm`](DThemeDialogConfirm.md) |

## Hierarchy

- [`DDialogConfirmOptions`](DDialogConfirmOptions.md)<`THEME`\>

  ↳ **`DDialogConfirmDiscardOptions`**

## Table of contents

### Properties

- [align](DDialogConfirmDiscardOptions.md#align)
- [animation](DDialogConfirmDiscardOptions.md#animation)
- [background](DDialogConfirmDiscardOptions.md#background)
- [border](DDialogConfirmDiscardOptions.md#border)
- [cancel](DDialogConfirmDiscardOptions.md#cancel)
- [children](DDialogConfirmDiscardOptions.md#children)
- [clear](DDialogConfirmDiscardOptions.md#clear)
- [closeOn](DDialogConfirmDiscardOptions.md#closeon)
- [corner](DDialogConfirmDiscardOptions.md#corner)
- [cursor](DDialogConfirmDiscardOptions.md#cursor)
- [height](DDialogConfirmDiscardOptions.md#height)
- [interactive](DDialogConfirmDiscardOptions.md#interactive)
- [layout](DDialogConfirmDiscardOptions.md#layout)
- [message](DDialogConfirmDiscardOptions.md#message)
- [mode](DDialogConfirmDiscardOptions.md#mode)
- [name](DDialogConfirmDiscardOptions.md#name)
- [ok](DDialogConfirmDiscardOptions.md#ok)
- [on](DDialogConfirmDiscardOptions.md#on)
- [outline](DDialogConfirmDiscardOptions.md#outline)
- [padding](DDialogConfirmDiscardOptions.md#padding)
- [parent](DDialogConfirmDiscardOptions.md#parent)
- [shadow](DDialogConfirmDiscardOptions.md#shadow)
- [shortcut](DDialogConfirmDiscardOptions.md#shortcut)
- [shortcuts](DDialogConfirmDiscardOptions.md#shortcuts)
- [state](DDialogConfirmDiscardOptions.md#state)
- [sticky](DDialogConfirmDiscardOptions.md#sticky)
- [theme](DDialogConfirmDiscardOptions.md#theme)
- [title](DDialogConfirmDiscardOptions.md#title)
- [visible](DDialogConfirmDiscardOptions.md#visible)
- [weight](DDialogConfirmDiscardOptions.md#weight)
- [width](DDialogConfirmDiscardOptions.md#width)
- [x](DDialogConfirmDiscardOptions.md#x)
- [y](DDialogConfirmDiscardOptions.md#y)

## Properties

### align

• `Optional` **align**: [`UtilAttachAlign`](../index.md#utilattachalign)

#### Inherited from

[DDialogConfirmOptions](DDialogConfirmOptions.md).[align](DDialogConfirmOptions.md#align)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:62](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L62)

___

### animation

• `Optional` **animation**: [`DAnimation`](DAnimation.md)<[`DBase`](../classes/DBase.md)<[`DThemeBase`](DThemeBase.md), [`DBaseOptions`](DBaseOptions.md)<[`DThemeBase`](DThemeBase.md), `any`\>\>\>

#### Inherited from

[DDialogConfirmOptions](DDialogConfirmOptions.md).[animation](DDialogConfirmOptions.md#animation)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:53](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L53)

___

### background

• `Optional` **background**: [`DBaseBackgroundOptions`](DBaseBackgroundOptions.md)

A background options.

#### Inherited from

[DDialogConfirmOptions](DDialogConfirmOptions.md).[background](DDialogConfirmOptions.md#background)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:448](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L448)

___

### border

• `Optional` **border**: [`DBaseBorderOptions`](DBaseBorderOptions.md)

A border options.

#### Inherited from

[DDialogConfirmOptions](DDialogConfirmOptions.md).[border](DDialogConfirmOptions.md#border)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:451](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L451)

___

### cancel

• `Optional` **cancel**: `string`

A cancel button label.

#### Inherited from

[DDialogConfirmOptions](DDialogConfirmOptions.md).[cancel](DDialogConfirmOptions.md#cancel)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-command.ts:60](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-dialog-command.ts#L60)

___

### children

• `Optional` **children**: (``null`` \| `DisplayObject`)[]

Children.

#### Inherited from

[DDialogConfirmOptions](DDialogConfirmOptions.md).[children](DDialogConfirmOptions.md#children)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:360](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L360)

___

### clear

• `Optional` **clear**: `number` \| ``"NONE"`` \| ``"BOTH"`` \| ``"BEFORE"`` \| ``"AFTER"``

A clear type used by [DLayoutVertical](../classes/DLayoutVertical.md) and [DLayoutHorizontal](../classes/DLayoutHorizontal.md).

#### Inherited from

[DDialogConfirmOptions](DDialogConfirmOptions.md).[clear](DDialogConfirmOptions.md#clear)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:460](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L460)

___

### closeOn

• `Optional` **closeOn**: `number`

#### Inherited from

[DDialogConfirmOptions](DDialogConfirmOptions.md).[closeOn](DDialogConfirmOptions.md#closeon)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:52](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L52)

___

### corner

• `Optional` **corner**: `number` \| [`DBaseCornerOptions`](DBaseCornerOptions.md)

A corner options.

#### Inherited from

[DDialogConfirmOptions](DDialogConfirmOptions.md).[corner](DDialogConfirmOptions.md#corner)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:423](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L423)

___

### cursor

• `Optional` **cursor**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`string`\>

A cursor shape.

#### Inherited from

[DDialogConfirmOptions](DDialogConfirmOptions.md).[cursor](DDialogConfirmOptions.md#cursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:463](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L463)

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

[DDialogConfirmOptions](DDialogConfirmOptions.md).[height](DDialogConfirmOptions.md#height)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:403](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L403)

___

### interactive

• `Optional` **interactive**: `number` \| ``"NONE"`` \| ``"CHILDREN"`` \| ``"SELF"`` \| ``"BOTH"``

An interactivity option.

#### Inherited from

[DDialogConfirmOptions](DDialogConfirmOptions.md).[interactive](DDialogConfirmOptions.md#interactive)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:417](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L417)

___

### layout

• `Optional` **layout**: [`DLayoutVerticalOptions`](DLayoutVerticalOptions.md)<[`DThemeLayoutVertical`](DThemeLayoutVertical.md)\>

Layout options.

#### Inherited from

[DDialogConfirmOptions](DDialogConfirmOptions.md).[layout](DDialogConfirmOptions.md#layout)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-command.ts:70](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-dialog-command.ts#L70)

___

### message

• `Optional` **message**: [`DStateAwareOrValue`](../index.md#dstateawareorvalue)<`string`\> \| [`DDialogConfirmMessageOptions`](DDialogConfirmMessageOptions.md)<[`DThemeDialogConfirmMessage`](DThemeDialogConfirmMessage.md)\> \| [`DDialogConfirmMessage`](../classes/DDialogConfirmMessage.md)<[`DThemeDialogConfirmMessage`](DThemeDialogConfirmMessage.md), [`DDialogConfirmMessageOptions`](DDialogConfirmMessageOptions.md)<[`DThemeDialogConfirmMessage`](DThemeDialogConfirmMessage.md)\>\>

#### Inherited from

[DDialogConfirmOptions](DDialogConfirmOptions.md).[message](DDialogConfirmOptions.md#message)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-confirm.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-dialog-confirm.ts#L16)

___

### mode

• `Optional` **mode**: ``"MODAL"`` \| ``"MODELESS"`` \| ``"MENU"`` \| [`DDialogMode`](../index.md#ddialogmode)

A dialog mode.

#### Inherited from

[DDialogConfirmOptions](DDialogConfirmOptions.md).[mode](DDialogConfirmOptions.md#mode)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:58](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L58)

___

### name

• `Optional` **name**: `string`

A name.

#### Inherited from

[DDialogConfirmOptions](DDialogConfirmOptions.md).[name](DDialogConfirmOptions.md#name)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:363](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L363)

___

### ok

• `Optional` **ok**: `string`

A ok button label.

#### Inherited from

[DDialogConfirmOptions](DDialogConfirmOptions.md).[ok](DDialogConfirmOptions.md#ok)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-command.ts:55](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-dialog-command.ts#L55)

___

### on

• `Optional` **on**: [`DDialogCommandOnOptions`](DDialogCommandOnOptions.md)<`void`, `any`\>

Mappings of event names and handlers.

#### Inherited from

[DDialogConfirmOptions](DDialogConfirmOptions.md).[on](DDialogConfirmOptions.md#on)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-command.ts:65](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-dialog-command.ts#L65)

___

### outline

• `Optional` **outline**: [`DBaseOutlineOptions`](DBaseOutlineOptions.md)

An outline options.

#### Inherited from

[DDialogConfirmOptions](DDialogConfirmOptions.md).[outline](DDialogConfirmOptions.md#outline)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:454](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L454)

___

### padding

• `Optional` **padding**: `number` \| [`DBasePaddingOptions`](DBasePaddingOptions.md)

A padding options.

#### Inherited from

[DDialogConfirmOptions](DDialogConfirmOptions.md).[padding](DDialogConfirmOptions.md#padding)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:420](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L420)

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

[DDialogConfirmOptions](DDialogConfirmOptions.md).[parent](DDialogConfirmOptions.md#parent)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:357](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L357)

___

### shadow

• `Optional` **shadow**: ``null`` \| [`DBaseShadow`](../index.md#dbaseshadow)

A shadow.

#### Inherited from

[DDialogConfirmOptions](DDialogConfirmOptions.md).[shadow](DDialogConfirmOptions.md#shadow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:457](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L457)

___

### shortcut

• `Optional` **shortcut**: `string` \| [`UtilKeyboardEventShortcut`](UtilKeyboardEventShortcut.md)

A shortcut option.

#### Inherited from

[DDialogConfirmOptions](DDialogConfirmOptions.md).[shortcut](DDialogConfirmOptions.md#shortcut)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:442](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L442)

___

### shortcuts

• `Optional` **shortcuts**: (`string` \| [`UtilKeyboardEventShortcut`](UtilKeyboardEventShortcut.md))[]

A shortcut options.

#### Inherited from

[DDialogConfirmOptions](DDialogConfirmOptions.md).[shortcuts](DDialogConfirmOptions.md#shortcuts)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:445](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L445)

___

### state

• `Optional` **state**: `string` \| `string`[]

A default state.

#### Inherited from

[DDialogConfirmOptions](DDialogConfirmOptions.md).[state](DDialogConfirmOptions.md#state)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:414](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L414)

___

### sticky

• `Optional` **sticky**: `boolean`

#### Inherited from

[DDialogConfirmOptions](DDialogConfirmOptions.md).[sticky](DDialogConfirmOptions.md#sticky)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:60](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L60)

___

### theme

• `Optional` **theme**: `string` \| `THEME`

A theme or a theme name.

#### Inherited from

[DDialogConfirmOptions](DDialogConfirmOptions.md).[theme](DDialogConfirmOptions.md#theme)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:426](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L426)

___

### title

• `Optional` **title**: `string`

A tooltip text.

#### Inherited from

[DDialogConfirmOptions](DDialogConfirmOptions.md).[title](DDialogConfirmOptions.md#title)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:439](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L439)

___

### visible

• `Optional` **visible**: `boolean`

A visibility.
Set to true to make [DBase](../classes/DBase.md) visible.
Set to false to make [DBase](../classes/DBase.md) invisible.
The default values is true.

#### Inherited from

[DDialogConfirmOptions](DDialogConfirmOptions.md).[visible](DDialogConfirmOptions.md#visible)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:411](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L411)

___

### weight

• `Optional` **weight**: `number`

A weight used by [DLayoutVertical](../classes/DLayoutVertical.md) and [DLayoutHorizontal](../classes/DLayoutHorizontal.md).

#### Inherited from

[DDialogConfirmOptions](DDialogConfirmOptions.md).[weight](DDialogConfirmOptions.md#weight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:436](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L436)

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

[DDialogConfirmOptions](DDialogConfirmOptions.md).[width](DDialogConfirmOptions.md#width)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:393](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L393)

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

[DDialogConfirmOptions](DDialogConfirmOptions.md).[x](DDialogConfirmOptions.md#x)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:373](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L373)

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

[DDialogConfirmOptions](DDialogConfirmOptions.md).[y](DDialogConfirmOptions.md#y)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:383](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L383)