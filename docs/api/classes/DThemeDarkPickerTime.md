[Winter Cardinal UI - v0.227.0](../index.md) / DThemeDarkPickerTime

# Class: DThemeDarkPickerTime

[DBase](DBase.md) theme.

## Hierarchy

- [`DThemeDarkBase`](DThemeDarkBase.md)

  ↳ **`DThemeDarkPickerTime`**

  ↳↳ [`DThemeDarkPickerDatetime`](DThemeDarkPickerDatetime.md)

## Implements

- [`DThemePickerTime`](../interfaces/DThemePickerTime.md)

## Table of contents

### Constructors

- [constructor](DThemeDarkPickerTime.md#constructor)

### Methods

- [getAlpha](DThemeDarkPickerTime.md#getalpha)
- [getBackgroundAlpha](DThemeDarkPickerTime.md#getbackgroundalpha)
- [getBackgroundColor](DThemeDarkPickerTime.md#getbackgroundcolor)
- [getBackgroundTexture](DThemeDarkPickerTime.md#getbackgroundtexture)
- [getBorderAlign](DThemeDarkPickerTime.md#getborderalign)
- [getBorderAlpha](DThemeDarkPickerTime.md#getborderalpha)
- [getBorderColor](DThemeDarkPickerTime.md#getbordercolor)
- [getBorderMask](DThemeDarkPickerTime.md#getbordermask)
- [getBorderTexture](DThemeDarkPickerTime.md#getbordertexture)
- [getBorderWidth](DThemeDarkPickerTime.md#getborderwidth)
- [getClearType](DThemeDarkPickerTime.md#getcleartype)
- [getColor](DThemeDarkPickerTime.md#getcolor)
- [getCornerMask](DThemeDarkPickerTime.md#getcornermask)
- [getCornerRadius](DThemeDarkPickerTime.md#getcornerradius)
- [getCursor](DThemeDarkPickerTime.md#getcursor)
- [getFontFamilly](DThemeDarkPickerTime.md#getfontfamilly)
- [getFontSize](DThemeDarkPickerTime.md#getfontsize)
- [getFontStyle](DThemeDarkPickerTime.md#getfontstyle)
- [getFontVariant](DThemeDarkPickerTime.md#getfontvariant)
- [getFontWeight](DThemeDarkPickerTime.md#getfontweight)
- [getHeight](DThemeDarkPickerTime.md#getheight)
- [getHoursOptions](DThemeDarkPickerTime.md#gethoursoptions)
- [getInteractive](DThemeDarkPickerTime.md#getinteractive)
- [getLineHeight](DThemeDarkPickerTime.md#getlineheight)
- [getLowerBound](DThemeDarkPickerTime.md#getlowerbound)
- [getMargin](DThemeDarkPickerTime.md#getmargin)
- [getMask](DThemeDarkPickerTime.md#getmask)
- [getMinutesOptions](DThemeDarkPickerTime.md#getminutesoptions)
- [getOutlineAlign](DThemeDarkPickerTime.md#getoutlinealign)
- [getOutlineAlpha](DThemeDarkPickerTime.md#getoutlinealpha)
- [getOutlineColor](DThemeDarkPickerTime.md#getoutlinecolor)
- [getOutlineMask](DThemeDarkPickerTime.md#getoutlinemask)
- [getOutlineOffset](DThemeDarkPickerTime.md#getoutlineoffset)
- [getOutlineWidth](DThemeDarkPickerTime.md#getoutlinewidth)
- [getPaddingBottom](DThemeDarkPickerTime.md#getpaddingbottom)
- [getPaddingLeft](DThemeDarkPickerTime.md#getpaddingleft)
- [getPaddingRight](DThemeDarkPickerTime.md#getpaddingright)
- [getPaddingTop](DThemeDarkPickerTime.md#getpaddingtop)
- [getSecondsOptions](DThemeDarkPickerTime.md#getsecondsoptions)
- [getShadow](DThemeDarkPickerTime.md#getshadow)
- [getTitle](DThemeDarkPickerTime.md#gettitle)
- [getUpperBound](DThemeDarkPickerTime.md#getupperbound)
- [getWeight](DThemeDarkPickerTime.md#getweight)
- [getWidth](DThemeDarkPickerTime.md#getwidth)
- [getX](DThemeDarkPickerTime.md#getx)
- [getY](DThemeDarkPickerTime.md#gety)
- [isLowerBoundInclusive](DThemeDarkPickerTime.md#islowerboundinclusive)
- [isUpperBoundInclusive](DThemeDarkPickerTime.md#isupperboundinclusive)
- [newShadow](DThemeDarkPickerTime.md#newshadow)
- [newShadowWeak](DThemeDarkPickerTime.md#newshadowweak)
- [newState](DThemeDarkPickerTime.md#newstate)

## Constructors

### constructor

• **new DThemeDarkPickerTime**()

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[constructor](DThemeDarkBase.md#constructor)

## Methods

### getAlpha

▸ **getAlpha**(`state`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |

#### Returns

`number`

#### Implementation of

[DThemePickerTime](../interfaces/DThemePickerTime.md).[getAlpha](../interfaces/DThemePickerTime.md#getalpha)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getAlpha](DThemeDarkBase.md#getalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L35)

___

### getBackgroundAlpha

▸ **getBackgroundAlpha**(`state`): `number`

Returns a background alpha.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) | a state |

#### Returns

`number`

#### Implementation of

[DThemePickerTime](../interfaces/DThemePickerTime.md).[getBackgroundAlpha](../interfaces/DThemePickerTime.md#getbackgroundalpha)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getBackgroundAlpha](DThemeDarkBase.md#getbackgroundalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:74](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L74)

___

### getBackgroundColor

▸ **getBackgroundColor**(`state`): ``null`` \| `number`

Returns a background color.
If the color is null, backgrounds are not be rendered.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) | a state |

#### Returns

``null`` \| `number`

#### Implementation of

[DThemePickerTime](../interfaces/DThemePickerTime.md).[getBackgroundColor](../interfaces/DThemePickerTime.md#getbackgroundcolor)

#### Overrides

[DThemeDarkBase](DThemeDarkBase.md).[getBackgroundColor](DThemeDarkBase.md#getbackgroundcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-picker-time.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-picker-time.ts#L15)

___

### getBackgroundTexture

▸ **getBackgroundTexture**(): `Texture`

Returns a background texture.

#### Returns

`Texture`

#### Implementation of

[DThemePickerTime](../interfaces/DThemePickerTime.md).[getBackgroundTexture](../interfaces/DThemePickerTime.md#getbackgroundtexture)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getBackgroundTexture](DThemeDarkBase.md#getbackgroundtexture)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:78](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L78)

___

### getBorderAlign

▸ **getBorderAlign**(`state`): `number`

Returns a border align.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) | a state |

#### Returns

`number`

#### Implementation of

[DThemePickerTime](../interfaces/DThemePickerTime.md).[getBorderAlign](../interfaces/DThemePickerTime.md#getborderalign)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getBorderAlign](DThemeDarkBase.md#getborderalign)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:94](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L94)

___

### getBorderAlpha

▸ **getBorderAlpha**(`state`): `number`

Returns a border alpha.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) | a state |

#### Returns

`number`

#### Implementation of

[DThemePickerTime](../interfaces/DThemePickerTime.md).[getBorderAlpha](../interfaces/DThemePickerTime.md#getborderalpha)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getBorderAlpha](DThemeDarkBase.md#getborderalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:86](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L86)

___

### getBorderColor

▸ **getBorderColor**(`state`): ``null`` \| `number`

Returns a border color.
If the color is null, borders are not be rendered.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) | a state |

#### Returns

``null`` \| `number`

#### Implementation of

[DThemePickerTime](../interfaces/DThemePickerTime.md).[getBorderColor](../interfaces/DThemePickerTime.md#getbordercolor)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getBorderColor](DThemeDarkBase.md#getbordercolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:82](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L82)

___

### getBorderMask

▸ **getBorderMask**(`state`): `number`

Returns a border mask.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) | a mask |

#### Returns

`number`

#### Implementation of

[DThemePickerTime](../interfaces/DThemePickerTime.md).[getBorderMask](../interfaces/DThemePickerTime.md#getbordermask)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getBorderMask](DThemeDarkBase.md#getbordermask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:98](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L98)

___

### getBorderTexture

▸ **getBorderTexture**(): `Texture`

Returns a border texture.

#### Returns

`Texture`

#### Implementation of

[DThemePickerTime](../interfaces/DThemePickerTime.md).[getBorderTexture](../interfaces/DThemePickerTime.md#getbordertexture)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getBorderTexture](DThemeDarkBase.md#getbordertexture)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:102](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L102)

___

### getBorderWidth

▸ **getBorderWidth**(`state`): `number`

Returns a border width.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) | a state |

#### Returns

`number`

#### Implementation of

[DThemePickerTime](../interfaces/DThemePickerTime.md).[getBorderWidth](../interfaces/DThemePickerTime.md#getborderwidth)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getBorderWidth](DThemeDarkBase.md#getborderwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:90](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L90)

___

### getClearType

▸ **getClearType**(): `number`

Returns a clear type.
A clear type is for layout classes including [DLayoutVertical](DLayoutVertical.md).

#### Returns

`number`

#### Implementation of

[DThemePickerTime](../interfaces/DThemePickerTime.md).[getClearType](../interfaces/DThemePickerTime.md#getcleartype)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getClearType](DThemeDarkBase.md#getcleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:157](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L157)

___

### getColor

▸ **getColor**(`state`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |

#### Returns

`number`

#### Implementation of

[DThemePickerTime](../interfaces/DThemePickerTime.md).[getColor](../interfaces/DThemePickerTime.md#getcolor)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getColor](DThemeDarkBase.md#getcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L19)

___

### getCornerMask

▸ **getCornerMask**(): `number`

Returns a corner mask.

#### Returns

`number`

#### Implementation of

[DThemePickerTime](../interfaces/DThemePickerTime.md).[getCornerMask](../interfaces/DThemePickerTime.md#getcornermask)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getCornerMask](DThemeDarkBase.md#getcornermask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:126](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L126)

___

### getCornerRadius

▸ **getCornerRadius**(): `number`

Returns a corner radius.

#### Returns

`number`

#### Implementation of

[DThemePickerTime](../interfaces/DThemePickerTime.md).[getCornerRadius](../interfaces/DThemePickerTime.md#getcornerradius)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getCornerRadius](DThemeDarkBase.md#getcornerradius)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:122](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L122)

___

### getCursor

▸ **getCursor**(`state`): `string`

Returns a cursor.

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |

#### Returns

`string`

#### Implementation of

[DThemePickerTime](../interfaces/DThemePickerTime.md).[getCursor](../interfaces/DThemePickerTime.md#getcursor)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getCursor](DThemeDarkBase.md#getcursor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:189](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L189)

___

### getFontFamilly

▸ **getFontFamilly**(): `string`

#### Returns

`string`

#### Implementation of

[DThemePickerTime](../interfaces/DThemePickerTime.md).[getFontFamilly](../interfaces/DThemePickerTime.md#getfontfamilly)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getFontFamilly](DThemeDarkBase.md#getfontfamilly)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L11)

___

### getFontSize

▸ **getFontSize**(): `number`

#### Returns

`number`

#### Implementation of

[DThemePickerTime](../interfaces/DThemePickerTime.md).[getFontSize](../interfaces/DThemePickerTime.md#getfontsize)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getFontSize](DThemeDarkBase.md#getfontsize)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L15)

___

### getFontStyle

▸ **getFontStyle**(): [`DFontStyle`](../index.md#dfontstyle)

#### Returns

[`DFontStyle`](../index.md#dfontstyle)

#### Implementation of

[DThemePickerTime](../interfaces/DThemePickerTime.md).[getFontStyle](../interfaces/DThemePickerTime.md#getfontstyle)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getFontStyle](DThemeDarkBase.md#getfontstyle)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L27)

___

### getFontVariant

▸ **getFontVariant**(): [`DFontVariant`](../index.md#dfontvariant)

#### Returns

[`DFontVariant`](../index.md#dfontvariant)

#### Implementation of

[DThemePickerTime](../interfaces/DThemePickerTime.md).[getFontVariant](../interfaces/DThemePickerTime.md#getfontvariant)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getFontVariant](DThemeDarkBase.md#getfontvariant)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L31)

___

### getFontWeight

▸ **getFontWeight**(): [`DFontWeight`](../index.md#dfontweight)

#### Returns

[`DFontWeight`](../index.md#dfontweight)

#### Implementation of

[DThemePickerTime](../interfaces/DThemePickerTime.md).[getFontWeight](../interfaces/DThemePickerTime.md#getfontweight)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getFontWeight](DThemeDarkBase.md#getfontweight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L23)

___

### getHeight

▸ **getHeight**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a height.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Implementation of

[DThemePickerTime](../interfaces/DThemePickerTime.md).[getHeight](../interfaces/DThemePickerTime.md#getheight)

#### Overrides

[DThemeDarkBase](DThemeDarkBase.md).[getHeight](DThemeDarkBase.md#getheight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-picker-time.ts:61](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-picker-time.ts#L61)

___

### getHoursOptions

▸ **getHoursOptions**(): [`DInputIntegerOptions`](../interfaces/DInputIntegerOptions.md)<[`DThemeInputInteger`](../interfaces/DThemeInputInteger.md)\>

#### Returns

[`DInputIntegerOptions`](../interfaces/DInputIntegerOptions.md)<[`DThemeInputInteger`](../interfaces/DThemeInputInteger.md)\>

#### Implementation of

[DThemePickerTime](../interfaces/DThemePickerTime.md).[getHoursOptions](../interfaces/DThemePickerTime.md#gethoursoptions)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-picker-time.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-picker-time.ts#L32)

___

### getInteractive

▸ **getInteractive**(): `number`

Returns an interactivity.

#### Returns

`number`

#### Implementation of

[DThemePickerTime](../interfaces/DThemePickerTime.md).[getInteractive](../interfaces/DThemePickerTime.md#getinteractive)

#### Overrides

[DThemeDarkBase](DThemeDarkBase.md).[getInteractive](DThemeDarkBase.md#getinteractive)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-picker-time.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-picker-time.ts#L19)

___

### getLineHeight

▸ **getLineHeight**(): `number`

#### Returns

`number`

#### Implementation of

[DThemePickerTime](../interfaces/DThemePickerTime.md).[getLineHeight](../interfaces/DThemePickerTime.md#getlineheight)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getLineHeight](DThemeDarkBase.md#getlineheight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L42)

___

### getLowerBound

▸ **getLowerBound**(): ``null`` \| `Date`

#### Returns

``null`` \| `Date`

#### Implementation of

[DThemePickerTime](../interfaces/DThemePickerTime.md).[getLowerBound](../interfaces/DThemePickerTime.md#getlowerbound)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-picker-time.ts:65](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-picker-time.ts#L65)

___

### getMargin

▸ **getMargin**(): `number`

#### Returns

`number`

#### Implementation of

[DThemePickerTime](../interfaces/DThemePickerTime.md).[getMargin](../interfaces/DThemePickerTime.md#getmargin)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-picker-time.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-picker-time.ts#L28)

___

### getMask

▸ **getMask**(): `number`

#### Returns

`number`

#### Implementation of

[DThemePickerTime](../interfaces/DThemePickerTime.md).[getMask](../interfaces/DThemePickerTime.md#getmask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-picker-time.ts:53](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-picker-time.ts#L53)

___

### getMinutesOptions

▸ **getMinutesOptions**(): [`DInputIntegerOptions`](../interfaces/DInputIntegerOptions.md)<[`DThemeInputInteger`](../interfaces/DThemeInputInteger.md)\>

#### Returns

[`DInputIntegerOptions`](../interfaces/DInputIntegerOptions.md)<[`DThemeInputInteger`](../interfaces/DThemeInputInteger.md)\>

#### Implementation of

[DThemePickerTime](../interfaces/DThemePickerTime.md).[getMinutesOptions](../interfaces/DThemePickerTime.md#getminutesoptions)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-picker-time.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-picker-time.ts#L39)

___

### getOutlineAlign

▸ **getOutlineAlign**(`state`): `number`

Returns an outline align.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) | a state |

#### Returns

`number`

#### Implementation of

[DThemePickerTime](../interfaces/DThemePickerTime.md).[getOutlineAlign](../interfaces/DThemePickerTime.md#getoutlinealign)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getOutlineAlign](DThemeDarkBase.md#getoutlinealign)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:149](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L149)

___

### getOutlineAlpha

▸ **getOutlineAlpha**(`state`): `number`

Returns an outline alpha.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) | a state |

#### Returns

`number`

#### Implementation of

[DThemePickerTime](../interfaces/DThemePickerTime.md).[getOutlineAlpha](../interfaces/DThemePickerTime.md#getoutlinealpha)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getOutlineAlpha](DThemeDarkBase.md#getoutlinealpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:134](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L134)

___

### getOutlineColor

▸ **getOutlineColor**(`state`): ``null`` \| `number`

Returns an outline color.
If the color is null, outlines are not be rendered.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) | a state |

#### Returns

``null`` \| `number`

#### Implementation of

[DThemePickerTime](../interfaces/DThemePickerTime.md).[getOutlineColor](../interfaces/DThemePickerTime.md#getoutlinecolor)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getOutlineColor](DThemeDarkBase.md#getoutlinecolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:130](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L130)

___

### getOutlineMask

▸ **getOutlineMask**(`state`): `number`

Returns an outline mask.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) | a state |

#### Returns

`number`

#### Implementation of

[DThemePickerTime](../interfaces/DThemePickerTime.md).[getOutlineMask](../interfaces/DThemePickerTime.md#getoutlinemask)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getOutlineMask](DThemeDarkBase.md#getoutlinemask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:153](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L153)

___

### getOutlineOffset

▸ **getOutlineOffset**(`state`): `number`

Returns an outline offset.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) | a state |

#### Returns

`number`

#### Implementation of

[DThemePickerTime](../interfaces/DThemePickerTime.md).[getOutlineOffset](../interfaces/DThemePickerTime.md#getoutlineoffset)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getOutlineOffset](DThemeDarkBase.md#getoutlineoffset)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:145](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L145)

___

### getOutlineWidth

▸ **getOutlineWidth**(`state`): `number`

Returns an outline width.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) | a state |

#### Returns

`number`

#### Implementation of

[DThemePickerTime](../interfaces/DThemePickerTime.md).[getOutlineWidth](../interfaces/DThemePickerTime.md#getoutlinewidth)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getOutlineWidth](DThemeDarkBase.md#getoutlinewidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:141](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L141)

___

### getPaddingBottom

▸ **getPaddingBottom**(): `number`

Returns a bottom padding.

#### Returns

`number`

#### Implementation of

[DThemePickerTime](../interfaces/DThemePickerTime.md).[getPaddingBottom](../interfaces/DThemePickerTime.md#getpaddingbottom)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getPaddingBottom](DThemeDarkBase.md#getpaddingbottom)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:118](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L118)

___

### getPaddingLeft

▸ **getPaddingLeft**(): `number`

Returns a left padding.

#### Returns

`number`

#### Implementation of

[DThemePickerTime](../interfaces/DThemePickerTime.md).[getPaddingLeft](../interfaces/DThemePickerTime.md#getpaddingleft)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getPaddingLeft](DThemeDarkBase.md#getpaddingleft)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:106](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L106)

___

### getPaddingRight

▸ **getPaddingRight**(): `number`

Returns a right padding.

#### Returns

`number`

#### Implementation of

[DThemePickerTime](../interfaces/DThemePickerTime.md).[getPaddingRight](../interfaces/DThemePickerTime.md#getpaddingright)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getPaddingRight](DThemeDarkBase.md#getpaddingright)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:110](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L110)

___

### getPaddingTop

▸ **getPaddingTop**(): `number`

Returns a top padding.

#### Returns

`number`

#### Implementation of

[DThemePickerTime](../interfaces/DThemePickerTime.md).[getPaddingTop](../interfaces/DThemePickerTime.md#getpaddingtop)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getPaddingTop](DThemeDarkBase.md#getpaddingtop)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:114](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L114)

___

### getSecondsOptions

▸ **getSecondsOptions**(): [`DInputIntegerOptions`](../interfaces/DInputIntegerOptions.md)<[`DThemeInputInteger`](../interfaces/DThemeInputInteger.md)\>

#### Returns

[`DInputIntegerOptions`](../interfaces/DInputIntegerOptions.md)<[`DThemeInputInteger`](../interfaces/DThemeInputInteger.md)\>

#### Implementation of

[DThemePickerTime](../interfaces/DThemePickerTime.md).[getSecondsOptions](../interfaces/DThemePickerTime.md#getsecondsoptions)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-picker-time.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-picker-time.ts#L46)

___

### getShadow

▸ **getShadow**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

Returns a shadow.
If a shadow is null, no shadow is rendered.

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

[DThemePickerTime](../interfaces/DThemePickerTime.md).[getShadow](../interfaces/DThemePickerTime.md#getshadow)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getShadow](DThemeDarkBase.md#getshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:161](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L161)

___

### getTitle

▸ **getTitle**(): `string`

Returns a tooltip text.

#### Returns

`string`

#### Implementation of

[DThemePickerTime](../interfaces/DThemePickerTime.md).[getTitle](../interfaces/DThemePickerTime.md#gettitle)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getTitle](DThemeDarkBase.md#gettitle)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:173](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L173)

___

### getUpperBound

▸ **getUpperBound**(): ``null`` \| `Date`

#### Returns

``null`` \| `Date`

#### Implementation of

[DThemePickerTime](../interfaces/DThemePickerTime.md).[getUpperBound](../interfaces/DThemePickerTime.md#getupperbound)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-picker-time.ts:73](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-picker-time.ts#L73)

___

### getWeight

▸ **getWeight**(): `number`

Returns a weight.
Weights are for layout classes including [DLayoutVertical](DLayoutVertical.md).
If a weight is less than or equals to zero, layout classes are supposed not to change a width / height.

#### Returns

`number`

#### Implementation of

[DThemePickerTime](../interfaces/DThemePickerTime.md).[getWeight](../interfaces/DThemePickerTime.md#getweight)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getWeight](DThemeDarkBase.md#getweight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:177](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L177)

___

### getWidth

▸ **getWidth**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a width.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Implementation of

[DThemePickerTime](../interfaces/DThemePickerTime.md).[getWidth](../interfaces/DThemePickerTime.md#getwidth)

#### Overrides

[DThemeDarkBase](DThemeDarkBase.md).[getWidth](DThemeDarkBase.md#getwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-picker-time.ts:57](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-picker-time.ts#L57)

___

### getX

▸ **getX**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a X coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Implementation of

[DThemePickerTime](../interfaces/DThemePickerTime.md).[getX](../interfaces/DThemePickerTime.md#getx)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getX](DThemeDarkBase.md#getx)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L54)

___

### getY

▸ **getY**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a Y coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Implementation of

[DThemePickerTime](../interfaces/DThemePickerTime.md).[getY](../interfaces/DThemePickerTime.md#gety)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[getY](DThemeDarkBase.md#gety)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:58](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L58)

___

### isLowerBoundInclusive

▸ **isLowerBoundInclusive**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DThemePickerTime](../interfaces/DThemePickerTime.md).[isLowerBoundInclusive](../interfaces/DThemePickerTime.md#islowerboundinclusive)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-picker-time.ts:69](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-picker-time.ts#L69)

___

### isUpperBoundInclusive

▸ **isUpperBoundInclusive**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DThemePickerTime](../interfaces/DThemePickerTime.md).[isUpperBoundInclusive](../interfaces/DThemePickerTime.md#isupperboundinclusive)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-picker-time.ts:77](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-picker-time.ts#L77)

___

### newShadow

▸ **newShadow**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

Creates a new shadow.

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

[DThemePickerTime](../interfaces/DThemePickerTime.md).[newShadow](../interfaces/DThemePickerTime.md#newshadow)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[newShadow](DThemeDarkBase.md#newshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:181](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L181)

___

### newShadowWeak

▸ **newShadowWeak**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

Creates a new weak shadow.

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

[DThemePickerTime](../interfaces/DThemePickerTime.md).[newShadowWeak](../interfaces/DThemePickerTime.md#newshadowweak)

#### Inherited from

[DThemeDarkBase](DThemeDarkBase.md).[newShadowWeak](DThemeDarkBase.md#newshadowweak)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:185](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L185)

___

### newState

▸ **newState**(`state`): `void`

Returns true if focusable.

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |

#### Returns

`void`

#### Implementation of

[DThemePickerTime](../interfaces/DThemePickerTime.md).[newState](../interfaces/DThemePickerTime.md#newstate)

#### Overrides

[DThemeDarkBase](DThemeDarkBase.md).[newState](DThemeDarkBase.md#newstate)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-picker-time.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-picker-time.ts#L23)
