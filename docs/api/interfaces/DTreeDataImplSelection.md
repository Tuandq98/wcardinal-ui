[Winter Cardinal UI - v0.155.0](../index.md) / DTreeDataImplSelection

# Interface: DTreeDataImplSelection<NODE\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `NODE` | extends [`DTreeNode`](DTreeNode.md) |

## Hierarchy

- [`DTreeDataSelection`](DTreeDataSelection.md)<`NODE`\>

  ↳ **`DTreeDataImplSelection`**

## Table of contents

### Properties

- [first](DTreeDataImplSelection.md#first)
- [last](DTreeDataImplSelection.md#last)
- [type](DTreeDataImplSelection.md#type)

### Methods

- [add](DTreeDataImplSelection.md#add)
- [addListener](DTreeDataImplSelection.md#addlistener)
- [clear](DTreeDataImplSelection.md#clear)
- [clearAndAdd](DTreeDataImplSelection.md#clearandadd)
- [clearAndAddAll](DTreeDataImplSelection.md#clearandaddall)
- [contains](DTreeDataImplSelection.md#contains)
- [each](DTreeDataImplSelection.md#each)
- [emit](DTreeDataImplSelection.md#emit)
- [eventNames](DTreeDataImplSelection.md#eventnames)
- [get](DTreeDataImplSelection.md#get)
- [isEmpty](DTreeDataImplSelection.md#isempty)
- [listenerCount](DTreeDataImplSelection.md#listenercount)
- [listeners](DTreeDataImplSelection.md#listeners)
- [off](DTreeDataImplSelection.md#off)
- [on](DTreeDataImplSelection.md#on)
- [onNodeChange](DTreeDataImplSelection.md#onnodechange)
- [once](DTreeDataImplSelection.md#once)
- [remove](DTreeDataImplSelection.md#remove)
- [removeAllListeners](DTreeDataImplSelection.md#removealllisteners)
- [removeListener](DTreeDataImplSelection.md#removelistener)
- [size](DTreeDataImplSelection.md#size)
- [toArray](DTreeDataImplSelection.md#toarray)
- [toggle](DTreeDataImplSelection.md#toggle)

## Properties

### first

• `Readonly` **first**: ``null`` \| `NODE`

A first selected node or null.

#### Inherited from

[DTreeDataSelection](DTreeDataSelection.md).[first](DTreeDataSelection.md#first)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data-selection.ts:62](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-tree-data-selection.ts#L62)

___

### last

• `Readonly` **last**: ``null`` \| `NODE`

A last selected node or null.

#### Inherited from

[DTreeDataSelection](DTreeDataSelection.md).[last](DTreeDataSelection.md#last)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data-selection.ts:67](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-tree-data-selection.ts#L67)

___

### type

• `Readonly` **type**: [`DTreeDataSelectionType`](../index.md#dtreedataselectiontype)

A type.

#### Inherited from

[DTreeDataSelection](DTreeDataSelection.md).[type](DTreeDataSelection.md#type)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data-selection.ts:57](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-tree-data-selection.ts#L57)

## Methods

### add

▸ **add**(`target`): `boolean`

Adds the given node

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `NODE` | a node |

#### Returns

`boolean`

true if succeeded.

#### Inherited from

[DTreeDataSelection](DTreeDataSelection.md).[add](DTreeDataSelection.md#add)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data-selection.ts:83](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-tree-data-selection.ts#L83)

___

### addListener

▸ **addListener**(`event`, `fn`, `context?`): [`DTreeDataImplSelection`](DTreeDataImplSelection.md)<`NODE`\>

Alias method for `on`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DTreeDataImplSelection`](DTreeDataImplSelection.md)<`NODE`\>

#### Inherited from

[DTreeDataSelection](DTreeDataSelection.md).[addListener](DTreeDataSelection.md#addlistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24076

___

### clear

▸ **clear**(): `boolean`

Clears all the nodes.

#### Returns

`boolean`

#### Inherited from

[DTreeDataSelection](DTreeDataSelection.md).[clear](DTreeDataSelection.md#clear)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data-selection.ts:104](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-tree-data-selection.ts#L104)

___

### clearAndAdd

▸ **clearAndAdd**(`target`): `boolean`

Clears all the exisint nodes and adds the given node.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `NODE` | a node to be added |

#### Returns

`boolean`

true if the selection is changed

#### Inherited from

[DTreeDataSelection](DTreeDataSelection.md).[clearAndAdd](DTreeDataSelection.md#clearandadd)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data-selection.ts:112](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-tree-data-selection.ts#L112)

___

### clearAndAddAll

▸ **clearAndAddAll**(`targets`): `boolean`

Clears the exising nodes and add all the given nodes.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `targets` | `NODE`[] | nodes to be added |

#### Returns

`boolean`

true if the selection is changed

#### Inherited from

[DTreeDataSelection](DTreeDataSelection.md).[clearAndAddAll](DTreeDataSelection.md#clearandaddall)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data-selection.ts:120](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-tree-data-selection.ts#L120)

___

### contains

▸ **contains**(`target`): `boolean`

Returns true if the given node is selected.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `NODE` | a node to be checked |

#### Returns

`boolean`

true if the given node is selected

#### Inherited from

[DTreeDataSelection](DTreeDataSelection.md).[contains](DTreeDataSelection.md#contains)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data-selection.ts:128](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-tree-data-selection.ts#L128)

___

### each

▸ **each**(`iteratee`): `void`

Iterates over selected nodes.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `iteratee` | (`node`: `NODE`) => `boolean` \| `void` | an iteratee |

#### Returns

`void`

#### Inherited from

[DTreeDataSelection](DTreeDataSelection.md).[each](DTreeDataSelection.md#each)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data-selection.ts:149](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-tree-data-selection.ts#L149)

___

### emit

▸ **emit**(`event`, ...`args`): `boolean`

Calls each of the listeners registered for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `...args` | `any`[] | Arguments that are passed to registered listeners |

#### Returns

`boolean`

`true` if the event had listeners, else `false`.

#### Inherited from

[DTreeDataSelection](DTreeDataSelection.md).[emit](DTreeDataSelection.md#emit)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24022

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Return an array listing the events for which the emitter has registered listeners.

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

[DTreeDataSelection](DTreeDataSelection.md).[eventNames](DTreeDataSelection.md#eventnames)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:23996

___

### get

▸ **get**(`index`): ``null`` \| `NODE`

Returns a node at the given index or null.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | an index |

#### Returns

``null`` \| `NODE`

a node at the given index or null

#### Inherited from

[DTreeDataSelection](DTreeDataSelection.md).[get](DTreeDataSelection.md#get)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data-selection.ts:75](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-tree-data-selection.ts#L75)

___

### isEmpty

▸ **isEmpty**(): `boolean`

Returns true if the selection is empty.

#### Returns

`boolean`

true if the selection is empty

#### Inherited from

[DTreeDataSelection](DTreeDataSelection.md).[isEmpty](DTreeDataSelection.md#isempty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data-selection.ts:142](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-tree-data-selection.ts#L142)

___

### listenerCount

▸ **listenerCount**(`event`): `number`

Return the number of listeners listening to a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |

#### Returns

`number`

#### Inherited from

[DTreeDataSelection](DTreeDataSelection.md).[listenerCount](DTreeDataSelection.md#listenercount)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24013

___

### listeners

▸ **listeners**(`event`): `Function`[]

Return the listeners registered for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |

#### Returns

`Function`[]

#### Inherited from

[DTreeDataSelection](DTreeDataSelection.md).[listeners](DTreeDataSelection.md#listeners)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24005

___

### off

▸ **off**(`event`, `fn?`, `context?`, `once?`): [`DTreeDataImplSelection`](DTreeDataImplSelection.md)<`NODE`\>

Alias method for `removeListener`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | `Function` |
| `context?` | `any` |
| `once?` | `boolean` |

#### Returns

[`DTreeDataImplSelection`](DTreeDataImplSelection.md)<`NODE`\>

#### Inherited from

[DTreeDataSelection](DTreeDataSelection.md).[off](DTreeDataSelection.md#off)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24070

___

### on

▸ **on**(`event`, `fn`, `context?`): [`DTreeDataImplSelection`](DTreeDataImplSelection.md)<`NODE`\>

Add a listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | - |

#### Returns

[`DTreeDataImplSelection`](DTreeDataImplSelection.md)<`NODE`\>

`this`.

#### Inherited from

[DTreeDataSelection](DTreeDataSelection.md).[on](DTreeDataSelection.md#on)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24033

___

### onNodeChange

▸ **onNodeChange**(`nodes`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodes` | `NODE`[] |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data-impl.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-tree-data-impl.ts#L23)

___

### once

▸ **once**(`event`, `fn`, `context?`): [`DTreeDataImplSelection`](DTreeDataImplSelection.md)<`NODE`\>

Add a one-time listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | - |

#### Returns

[`DTreeDataImplSelection`](DTreeDataImplSelection.md)<`NODE`\>

`this`.

#### Inherited from

[DTreeDataSelection](DTreeDataSelection.md).[once](DTreeDataSelection.md#once)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24044

___

### remove

▸ **remove**(`target`): `boolean`

Removes the given node.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `NODE` | a node |

#### Returns

`boolean`

true if succeeded

#### Inherited from

[DTreeDataSelection](DTreeDataSelection.md).[remove](DTreeDataSelection.md#remove)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data-selection.ts:91](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-tree-data-selection.ts#L91)

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`DTreeDataImplSelection`](DTreeDataImplSelection.md)<`NODE`\>

Remove all listeners, or those of the specified event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event?` | `string` \| `symbol` | The event name. |

#### Returns

[`DTreeDataImplSelection`](DTreeDataImplSelection.md)<`NODE`\>

`this`.

#### Inherited from

[DTreeDataSelection](DTreeDataSelection.md).[removeAllListeners](DTreeDataSelection.md#removealllisteners)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24064

___

### removeListener

▸ **removeListener**(`event`, `fn?`, `context?`, `once?`): [`DTreeDataImplSelection`](DTreeDataImplSelection.md)<`NODE`\>

Remove the listeners of a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn?` | `Function` | Only remove the listeners that match this function. |
| `context?` | `any` | Only remove the listeners that have this context. |
| `once?` | `boolean` | Only remove one-time listeners. |

#### Returns

[`DTreeDataImplSelection`](DTreeDataImplSelection.md)<`NODE`\>

`this`.

#### Inherited from

[DTreeDataSelection](DTreeDataSelection.md).[removeListener](DTreeDataSelection.md#removelistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24056

___

### size

▸ **size**(): `number`

Returns the number of selected nodes.

#### Returns

`number`

the number of selected nodes

#### Inherited from

[DTreeDataSelection](DTreeDataSelection.md).[size](DTreeDataSelection.md#size)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data-selection.ts:135](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-tree-data-selection.ts#L135)

___

### toArray

▸ **toArray**(): `NODE`[]

Returns an array of selected nodes.

#### Returns

`NODE`[]

an array of selected nodes.

#### Inherited from

[DTreeDataSelection](DTreeDataSelection.md).[toArray](DTreeDataSelection.md#toarray)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data-selection.ts:156](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-tree-data-selection.ts#L156)

___

### toggle

▸ **toggle**(`target`): `boolean`

Toggles the given node.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `NODE` | a node |

#### Returns

`boolean`

true if succeeded.

#### Inherited from

[DTreeDataSelection](DTreeDataSelection.md).[toggle](DTreeDataSelection.md#toggle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data-selection.ts:99](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-tree-data-selection.ts#L99)