[Winter Cardinal UI - v0.227.0](../index.md) / DThemeDiagramCanvas

# Interface: DThemeDiagramCanvas

[DBase](../classes/DBase.md) theme.

## Hierarchy

- [`DThemeDiagramCanvasBase`](DThemeDiagramCanvasBase.md)

  ↳ **`DThemeDiagramCanvas`**

## Implemented by

- [`DThemeDarkDiagramCanvas`](../classes/DThemeDarkDiagramCanvas.md)
- [`DThemeWhiteDiagramCanvas`](../classes/DThemeWhiteDiagramCanvas.md)

## Table of contents

### Methods

- [getAlpha](DThemeDiagramCanvas.md#getalpha)
- [getBackgroundAlpha](DThemeDiagramCanvas.md#getbackgroundalpha)
- [getBackgroundBase](DThemeDiagramCanvas.md#getbackgroundbase)
- [getBackgroundColor](DThemeDiagramCanvas.md#getbackgroundcolor)
- [getBackgroundTexture](DThemeDiagramCanvas.md#getbackgroundtexture)
- [getBorderAlign](DThemeDiagramCanvas.md#getborderalign)
- [getBorderAlpha](DThemeDiagramCanvas.md#getborderalpha)
- [getBorderColor](DThemeDiagramCanvas.md#getbordercolor)
- [getBorderMask](DThemeDiagramCanvas.md#getbordermask)
- [getBorderTexture](DThemeDiagramCanvas.md#getbordertexture)
- [getBorderWidth](DThemeDiagramCanvas.md#getborderwidth)
- [getClearType](DThemeDiagramCanvas.md#getcleartype)
- [getColor](DThemeDiagramCanvas.md#getcolor)
- [getCornerMask](DThemeDiagramCanvas.md#getcornermask)
- [getCornerRadius](DThemeDiagramCanvas.md#getcornerradius)
- [getCursor](DThemeDiagramCanvas.md#getcursor)
- [getFontFamilly](DThemeDiagramCanvas.md#getfontfamilly)
- [getFontSize](DThemeDiagramCanvas.md#getfontsize)
- [getFontStyle](DThemeDiagramCanvas.md#getfontstyle)
- [getFontVariant](DThemeDiagramCanvas.md#getfontvariant)
- [getFontWeight](DThemeDiagramCanvas.md#getfontweight)
- [getHeight](DThemeDiagramCanvas.md#getheight)
- [getInteractive](DThemeDiagramCanvas.md#getinteractive)
- [getLineHeight](DThemeDiagramCanvas.md#getlineheight)
- [getOutlineAlign](DThemeDiagramCanvas.md#getoutlinealign)
- [getOutlineAlpha](DThemeDiagramCanvas.md#getoutlinealpha)
- [getOutlineColor](DThemeDiagramCanvas.md#getoutlinecolor)
- [getOutlineMask](DThemeDiagramCanvas.md#getoutlinemask)
- [getOutlineOffset](DThemeDiagramCanvas.md#getoutlineoffset)
- [getOutlineWidth](DThemeDiagramCanvas.md#getoutlinewidth)
- [getPaddingBottom](DThemeDiagramCanvas.md#getpaddingbottom)
- [getPaddingLeft](DThemeDiagramCanvas.md#getpaddingleft)
- [getPaddingRight](DThemeDiagramCanvas.md#getpaddingright)
- [getPaddingTop](DThemeDiagramCanvas.md#getpaddingtop)
- [getShadow](DThemeDiagramCanvas.md#getshadow)
- [getTitle](DThemeDiagramCanvas.md#gettitle)
- [getWeight](DThemeDiagramCanvas.md#getweight)
- [getWidth](DThemeDiagramCanvas.md#getwidth)
- [getX](DThemeDiagramCanvas.md#getx)
- [getY](DThemeDiagramCanvas.md#gety)
- [isAmbient](DThemeDiagramCanvas.md#isambient)
- [newShadow](DThemeDiagramCanvas.md#newshadow)
- [newShadowWeak](DThemeDiagramCanvas.md#newshadowweak)
- [newState](DThemeDiagramCanvas.md#newstate)

## Methods

### getAlpha

▸ **getAlpha**(`state`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) |

#### Returns

`number`

#### Inherited from

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[getAlpha](DThemeDiagramCanvasBase.md#getalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-font.ts#L34)

___

### getBackgroundAlpha

▸ **getBackgroundAlpha**(`state`): `number`

Returns a background alpha.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) | a state |

#### Returns

`number`

#### Inherited from

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[getBackgroundAlpha](DThemeDiagramCanvasBase.md#getbackgroundalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:517](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L517)

___

### getBackgroundBase

▸ **getBackgroundBase**(): ``null`` \| `number`

#### Returns

``null`` \| `number`

#### Inherited from

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[getBackgroundBase](DThemeDiagramCanvasBase.md#getbackgroundbase)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-base.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-base.ts#L29)

___

### getBackgroundColor

▸ **getBackgroundColor**(`state`): ``null`` \| `number`

Returns a background color.
If the color is null, backgrounds are not be rendered.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) | a state |

#### Returns

``null`` \| `number`

#### Inherited from

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[getBackgroundColor](DThemeDiagramCanvasBase.md#getbackgroundcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:510](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L510)

___

### getBackgroundTexture

▸ **getBackgroundTexture**(): `Texture`

Returns a background texture.

#### Returns

`Texture`

#### Inherited from

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[getBackgroundTexture](DThemeDiagramCanvasBase.md#getbackgroundtexture)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:522](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L522)

___

### getBorderAlign

▸ **getBorderAlign**(`state`): `number`

Returns a border align.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) | a state |

#### Returns

`number`

#### Inherited from

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[getBorderAlign](DThemeDiagramCanvasBase.md#getborderalign)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:551](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L551)

___

### getBorderAlpha

▸ **getBorderAlpha**(`state`): `number`

Returns a border alpha.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) | a state |

#### Returns

`number`

#### Inherited from

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[getBorderAlpha](DThemeDiagramCanvasBase.md#getborderalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:537](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L537)

___

### getBorderColor

▸ **getBorderColor**(`state`): ``null`` \| `number`

Returns a border color.
If the color is null, borders are not be rendered.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) | a state |

#### Returns

``null`` \| `number`

#### Inherited from

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[getBorderColor](DThemeDiagramCanvasBase.md#getbordercolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:530](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L530)

___

### getBorderMask

▸ **getBorderMask**(`state`): `number`

Returns a border mask.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) | a mask |

#### Returns

`number`

#### Inherited from

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[getBorderMask](DThemeDiagramCanvasBase.md#getbordermask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:558](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L558)

___

### getBorderTexture

▸ **getBorderTexture**(): `Texture`

Returns a border texture.

#### Returns

`Texture`

#### Inherited from

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[getBorderTexture](DThemeDiagramCanvasBase.md#getbordertexture)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:563](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L563)

___

### getBorderWidth

▸ **getBorderWidth**(`state`): `number`

Returns a border width.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) | a state |

#### Returns

`number`

#### Inherited from

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[getBorderWidth](DThemeDiagramCanvasBase.md#getborderwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:544](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L544)

___

### getClearType

▸ **getClearType**(): `number`

Returns a clear type.
A clear type is for layout classes including [DLayoutVertical](../classes/DLayoutVertical.md).

#### Returns

`number`

#### Inherited from

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[getClearType](DThemeDiagramCanvasBase.md#getcleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:663](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L663)

___

### getColor

▸ **getColor**(`state`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) |

#### Returns

`number`

#### Inherited from

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[getColor](DThemeDiagramCanvasBase.md#getcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-font.ts#L33)

___

### getCornerMask

▸ **getCornerMask**(): `number`

Returns a corner mask.

#### Returns

`number`

#### Inherited from

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[getCornerMask](DThemeDiagramCanvasBase.md#getcornermask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:593](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L593)

___

### getCornerRadius

▸ **getCornerRadius**(): `number`

Returns a corner radius.

#### Returns

`number`

#### Inherited from

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[getCornerRadius](DThemeDiagramCanvasBase.md#getcornerradius)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:588](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L588)

___

### getCursor

▸ **getCursor**(`state`): `string`

Returns a cursor.

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) |

#### Returns

`string`

#### Inherited from

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[getCursor](DThemeDiagramCanvasBase.md#getcursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:685](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L685)

___

### getFontFamilly

▸ **getFontFamilly**(): `string`

#### Returns

`string`

#### Inherited from

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[getFontFamilly](DThemeDiagramCanvasBase.md#getfontfamilly)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-font.ts#L28)

___

### getFontSize

▸ **getFontSize**(): `number`

#### Returns

`number`

#### Inherited from

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[getFontSize](DThemeDiagramCanvasBase.md#getfontsize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-font.ts#L29)

___

### getFontStyle

▸ **getFontStyle**(): [`DFontStyle`](../index.md#dfontstyle)

#### Returns

[`DFontStyle`](../index.md#dfontstyle)

#### Inherited from

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[getFontStyle](DThemeDiagramCanvasBase.md#getfontstyle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-font.ts#L31)

___

### getFontVariant

▸ **getFontVariant**(): [`DFontVariant`](../index.md#dfontvariant)

#### Returns

[`DFontVariant`](../index.md#dfontvariant)

#### Inherited from

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[getFontVariant](DThemeDiagramCanvasBase.md#getfontvariant)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-font.ts#L32)

___

### getFontWeight

▸ **getFontWeight**(): [`DFontWeight`](../index.md#dfontweight)

#### Returns

[`DFontWeight`](../index.md#dfontweight)

#### Inherited from

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[getFontWeight](DThemeDiagramCanvasBase.md#getfontweight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-font.ts#L30)

___

### getHeight

▸ **getHeight**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a height.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Inherited from

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[getHeight](DThemeDiagramCanvasBase.md#getheight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:497](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L497)

___

### getInteractive

▸ **getInteractive**(): `number`

Returns an interactivity.

#### Returns

`number`

#### Inherited from

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[getInteractive](DThemeDiagramCanvasBase.md#getinteractive)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:647](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L647)

___

### getLineHeight

▸ **getLineHeight**(): `number`

#### Returns

`number`

#### Inherited from

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[getLineHeight](DThemeDiagramCanvasBase.md#getlineheight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-font.ts#L35)

___

### getOutlineAlign

▸ **getOutlineAlign**(`state`): `number`

Returns an outline align.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) | a state |

#### Returns

`number`

#### Inherited from

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[getOutlineAlign](DThemeDiagramCanvasBase.md#getoutlinealign)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:629](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L629)

___

### getOutlineAlpha

▸ **getOutlineAlpha**(`state`): `number`

Returns an outline alpha.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) | a state |

#### Returns

`number`

#### Inherited from

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[getOutlineAlpha](DThemeDiagramCanvasBase.md#getoutlinealpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:608](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L608)

___

### getOutlineColor

▸ **getOutlineColor**(`state`): ``null`` \| `number`

Returns an outline color.
If the color is null, outlines are not be rendered.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) | a state |

#### Returns

``null`` \| `number`

#### Inherited from

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[getOutlineColor](DThemeDiagramCanvasBase.md#getoutlinecolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:601](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L601)

___

### getOutlineMask

▸ **getOutlineMask**(`state`): `number`

Returns an outline mask.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) | a state |

#### Returns

`number`

#### Inherited from

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[getOutlineMask](DThemeDiagramCanvasBase.md#getoutlinemask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:636](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L636)

___

### getOutlineOffset

▸ **getOutlineOffset**(`state`): `number`

Returns an outline offset.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) | a state |

#### Returns

`number`

#### Inherited from

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[getOutlineOffset](DThemeDiagramCanvasBase.md#getoutlineoffset)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:622](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L622)

___

### getOutlineWidth

▸ **getOutlineWidth**(`state`): `number`

Returns an outline width.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) | a state |

#### Returns

`number`

#### Inherited from

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[getOutlineWidth](DThemeDiagramCanvasBase.md#getoutlinewidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:615](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L615)

___

### getPaddingBottom

▸ **getPaddingBottom**(): `number`

Returns a bottom padding.

#### Returns

`number`

#### Inherited from

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[getPaddingBottom](DThemeDiagramCanvasBase.md#getpaddingbottom)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:583](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L583)

___

### getPaddingLeft

▸ **getPaddingLeft**(): `number`

Returns a left padding.

#### Returns

`number`

#### Inherited from

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[getPaddingLeft](DThemeDiagramCanvasBase.md#getpaddingleft)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:568](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L568)

___

### getPaddingRight

▸ **getPaddingRight**(): `number`

Returns a right padding.

#### Returns

`number`

#### Inherited from

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[getPaddingRight](DThemeDiagramCanvasBase.md#getpaddingright)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:573](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L573)

___

### getPaddingTop

▸ **getPaddingTop**(): `number`

Returns a top padding.

#### Returns

`number`

#### Inherited from

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[getPaddingTop](DThemeDiagramCanvasBase.md#getpaddingtop)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:578](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L578)

___

### getShadow

▸ **getShadow**(): ``null`` \| [`DShadow`](DShadow.md)

Returns a shadow.
If a shadow is null, no shadow is rendered.

#### Returns

``null`` \| [`DShadow`](DShadow.md)

#### Inherited from

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[getShadow](DThemeDiagramCanvasBase.md#getshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:642](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L642)

___

### getTitle

▸ **getTitle**(): `string`

Returns a tooltip text.

#### Returns

`string`

#### Inherited from

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[getTitle](DThemeDiagramCanvasBase.md#gettitle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:657](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L657)

___

### getWeight

▸ **getWeight**(): `number`

Returns a weight.
Weights are for layout classes including [DLayoutVertical](../classes/DLayoutVertical.md).
If a weight is less than or equals to zero, layout classes are supposed not to change a width / height.

#### Returns

`number`

#### Inherited from

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[getWeight](DThemeDiagramCanvasBase.md#getweight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:670](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L670)

___

### getWidth

▸ **getWidth**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a width.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Inherited from

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[getWidth](DThemeDiagramCanvasBase.md#getwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:502](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L502)

___

### getX

▸ **getX**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a X coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[getX](DThemeDiagramCanvasBase.md#getx)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:487](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L487)

___

### getY

▸ **getY**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a Y coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[getY](DThemeDiagramCanvasBase.md#gety)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:492](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L492)

___

### isAmbient

▸ **isAmbient**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[isAmbient](DThemeDiagramCanvasBase.md#isambient)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-base.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-base.ts#L28)

___

### newShadow

▸ **newShadow**(): ``null`` \| [`DShadow`](DShadow.md)

Creates a new shadow.

#### Returns

``null`` \| [`DShadow`](DShadow.md)

#### Inherited from

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[newShadow](DThemeDiagramCanvasBase.md#newshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:675](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L675)

___

### newShadowWeak

▸ **newShadowWeak**(): ``null`` \| [`DShadow`](DShadow.md)

Creates a new weak shadow.

#### Returns

``null`` \| [`DShadow`](DShadow.md)

#### Inherited from

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[newShadowWeak](DThemeDiagramCanvasBase.md#newshadowweak)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:680](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L680)

___

### newState

▸ **newState**(`state`): `void`

Returns true if focusable.

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) |

#### Returns

`void`

#### Inherited from

[DThemeDiagramCanvasBase](DThemeDiagramCanvasBase.md).[newState](DThemeDiagramCanvasBase.md#newstate)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:652](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L652)
