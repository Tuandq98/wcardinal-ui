[Winter Cardinal UI - v0.227.0](../index.md) / DControllerCommandImpl

# Class: DControllerCommandImpl

## Hierarchy

- `EventEmitter`

  ↳ **`DControllerCommandImpl`**

## Implements

- [`DControllerCommand`](../interfaces/DControllerCommand.md)

## Table of contents

### Constructors

- [constructor](DControllerCommandImpl.md#constructor)

### Properties

- [\_done](DControllerCommandImpl.md#_done)
- [\_executing](DControllerCommandImpl.md#_executing)
- [\_position](DControllerCommandImpl.md#_position)
- [\_waiting](DControllerCommandImpl.md#_waiting)

### Methods

- [addListener](DControllerCommandImpl.md#addlistener)
- [cleanup](DControllerCommandImpl.md#cleanup)
- [clear](DControllerCommandImpl.md#clear)
- [emit](DControllerCommandImpl.md#emit)
- [eventNames](DControllerCommandImpl.md#eventnames)
- [execute](DControllerCommandImpl.md#execute)
- [executeRedo](DControllerCommandImpl.md#executeredo)
- [executeUndo](DControllerCommandImpl.md#executeundo)
- [isRedoable](DControllerCommandImpl.md#isredoable)
- [isUndoable](DControllerCommandImpl.md#isundoable)
- [last](DControllerCommandImpl.md#last)
- [listenerCount](DControllerCommandImpl.md#listenercount)
- [listeners](DControllerCommandImpl.md#listeners)
- [next](DControllerCommandImpl.md#next)
- [off](DControllerCommandImpl.md#off)
- [on](DControllerCommandImpl.md#on)
- [onFail](DControllerCommandImpl.md#onfail)
- [onSuccess](DControllerCommandImpl.md#onsuccess)
- [onSuccessRedo](DControllerCommandImpl.md#onsuccessredo)
- [onSuccessUndo](DControllerCommandImpl.md#onsuccessundo)
- [once](DControllerCommandImpl.md#once)
- [push](DControllerCommandImpl.md#push)
- [redo](DControllerCommandImpl.md#redo)
- [remove](DControllerCommandImpl.md#remove)
- [removeAllListeners](DControllerCommandImpl.md#removealllisteners)
- [removeListener](DControllerCommandImpl.md#removelistener)
- [size](DControllerCommandImpl.md#size)
- [undo](DControllerCommandImpl.md#undo)

## Constructors

### constructor

• **new DControllerCommandImpl**()

#### Overrides

utils.EventEmitter.constructor

#### Defined in

[src/main/typescript/wcardinal/ui/d-controller-command-impl.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-controller-command-impl.ts#L32)

## Properties

### \_done

• `Protected` **\_done**: [`DCommand`](../interfaces/DCommand.md)[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-controller-command-impl.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-controller-command-impl.ts#L28)

___

### \_executing

• `Protected` **\_executing**: ``null`` \| `Promise`<`void`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-controller-command-impl.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-controller-command-impl.ts#L30)

___

### \_position

• `Protected` **\_position**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-controller-command-impl.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-controller-command-impl.ts#L27)

___

### \_waiting

• `Protected` **\_waiting**: [`DCommand`](../interfaces/DCommand.md)[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-controller-command-impl.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-controller-command-impl.ts#L29)

## Methods

### addListener

▸ **addListener**(`event`, `fn`, `context?`): [`DControllerCommandImpl`](DControllerCommandImpl.md)

Alias method for `on`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DControllerCommandImpl`](DControllerCommandImpl.md)

#### Implementation of

[DControllerCommand](../interfaces/DControllerCommand.md).[addListener](../interfaces/DControllerCommand.md#addlistener)

#### Inherited from

utils.EventEmitter.addListener

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24076

___

### cleanup

▸ `Protected` **cleanup**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-controller-command-impl.ts:168](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-controller-command-impl.ts#L168)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Implementation of

[DControllerCommand](../interfaces/DControllerCommand.md).[clear](../interfaces/DControllerCommand.md#clear)

#### Defined in

[src/main/typescript/wcardinal/ui/d-controller-command-impl.ts:241](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-controller-command-impl.ts#L241)

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

#### Implementation of

[DControllerCommand](../interfaces/DControllerCommand.md).[emit](../interfaces/DControllerCommand.md#emit)

#### Inherited from

utils.EventEmitter.emit

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24022

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Return an array listing the events for which the emitter has registered listeners.

#### Returns

(`string` \| `symbol`)[]

#### Implementation of

[DControllerCommand](../interfaces/DControllerCommand.md).[eventNames](../interfaces/DControllerCommand.md#eventnames)

#### Inherited from

utils.EventEmitter.eventNames

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:23996

___

### execute

▸ `Protected` **execute**(`command`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `command` | [`DCommand`](../interfaces/DCommand.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-controller-command-impl.ts:139](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-controller-command-impl.ts#L139)

___

### executeRedo

▸ `Protected` **executeRedo**(`command`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `command` | [`DCommandRedo`](DCommandRedo.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-controller-command-impl.ts:115](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-controller-command-impl.ts#L115)

___

### executeUndo

▸ `Protected` **executeUndo**(`command`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `command` | [`DCommandUndo`](DCommandUndo.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-controller-command-impl.ts:91](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-controller-command-impl.ts#L91)

___

### isRedoable

▸ **isRedoable**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DControllerCommand](../interfaces/DControllerCommand.md).[isRedoable](../interfaces/DControllerCommand.md#isredoable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-controller-command-impl.ts:259](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-controller-command-impl.ts#L259)

___

### isUndoable

▸ **isUndoable**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DControllerCommand](../interfaces/DControllerCommand.md).[isUndoable](../interfaces/DControllerCommand.md#isundoable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-controller-command-impl.ts:263](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-controller-command-impl.ts#L263)

___

### last

▸ **last**(): ``null`` \| [`DCommand`](../interfaces/DCommand.md)

#### Returns

``null`` \| [`DCommand`](../interfaces/DCommand.md)

#### Implementation of

[DControllerCommand](../interfaces/DControllerCommand.md).[last](../interfaces/DControllerCommand.md#last)

#### Defined in

[src/main/typescript/wcardinal/ui/d-controller-command-impl.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-controller-command-impl.ts#L41)

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

#### Implementation of

[DControllerCommand](../interfaces/DControllerCommand.md).[listenerCount](../interfaces/DControllerCommand.md#listenercount)

#### Inherited from

utils.EventEmitter.listenerCount

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

#### Implementation of

[DControllerCommand](../interfaces/DControllerCommand.md).[listeners](../interfaces/DControllerCommand.md#listeners)

#### Inherited from

utils.EventEmitter.listeners

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24005

___

### next

▸ **next**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-controller-command-impl.ts:61](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-controller-command-impl.ts#L61)

___

### off

▸ **off**(`event`, `fn?`, `context?`, `once?`): [`DControllerCommandImpl`](DControllerCommandImpl.md)

Alias method for `removeListener`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | `Function` |
| `context?` | `any` |
| `once?` | `boolean` |

#### Returns

[`DControllerCommandImpl`](DControllerCommandImpl.md)

#### Implementation of

[DControllerCommand](../interfaces/DControllerCommand.md).[off](../interfaces/DControllerCommand.md#off)

#### Inherited from

utils.EventEmitter.off

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24070

___

### on

▸ **on**(`event`, `fn`, `context?`): [`DControllerCommandImpl`](DControllerCommandImpl.md)

Add a listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | The context to invoke the listener with. |

#### Returns

[`DControllerCommandImpl`](DControllerCommandImpl.md)

`this`.

#### Implementation of

[DControllerCommand](../interfaces/DControllerCommand.md).[on](../interfaces/DControllerCommand.md#on)

#### Inherited from

utils.EventEmitter.on

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24033

___

### onFail

▸ `Protected` **onFail**(`command`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `command` | [`DCommand`](../interfaces/DCommand.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-controller-command-impl.ts:226](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-controller-command-impl.ts#L226)

___

### onSuccess

▸ `Protected` **onSuccess**(`command`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `command` | [`DCommand`](../interfaces/DCommand.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-controller-command-impl.ts:196](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-controller-command-impl.ts#L196)

___

### onSuccessRedo

▸ `Protected` **onSuccessRedo**(`redoed`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `redoed` | [`DCommand`](../interfaces/DCommand.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-controller-command-impl.ts:217](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-controller-command-impl.ts#L217)

___

### onSuccessUndo

▸ `Protected` **onSuccessUndo**(`undoed`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `undoed` | [`DCommand`](../interfaces/DCommand.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-controller-command-impl.ts:208](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-controller-command-impl.ts#L208)

___

### once

▸ **once**(`event`, `fn`, `context?`): [`DControllerCommandImpl`](DControllerCommandImpl.md)

Add a one-time listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | The context to invoke the listener with. |

#### Returns

[`DControllerCommandImpl`](DControllerCommandImpl.md)

`this`.

#### Implementation of

[DControllerCommand](../interfaces/DControllerCommand.md).[once](../interfaces/DControllerCommand.md#once)

#### Inherited from

utils.EventEmitter.once

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24044

___

### push

▸ **push**(`command`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `command` | [`DCommand`](../interfaces/DCommand.md) |

#### Returns

`void`

#### Implementation of

[DControllerCommand](../interfaces/DControllerCommand.md).[push](../interfaces/DControllerCommand.md#push)

#### Defined in

[src/main/typescript/wcardinal/ui/d-controller-command-impl.ts:56](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-controller-command-impl.ts#L56)

___

### redo

▸ **redo**(): `void`

#### Returns

`void`

#### Implementation of

[DControllerCommand](../interfaces/DControllerCommand.md).[redo](../interfaces/DControllerCommand.md#redo)

#### Defined in

[src/main/typescript/wcardinal/ui/d-controller-command-impl.ts:245](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-controller-command-impl.ts#L245)

___

### remove

▸ `Protected` **remove**(`size`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | `number` |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-controller-command-impl.ts:179](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-controller-command-impl.ts#L179)

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`DControllerCommandImpl`](DControllerCommandImpl.md)

Remove all listeners, or those of the specified event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event?` | `string` \| `symbol` | The event name. |

#### Returns

[`DControllerCommandImpl`](DControllerCommandImpl.md)

`this`.

#### Implementation of

[DControllerCommand](../interfaces/DControllerCommand.md).[removeAllListeners](../interfaces/DControllerCommand.md#removealllisteners)

#### Inherited from

utils.EventEmitter.removeAllListeners

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24064

___

### removeListener

▸ **removeListener**(`event`, `fn?`, `context?`, `once?`): [`DControllerCommandImpl`](DControllerCommandImpl.md)

Remove the listeners of a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn?` | `Function` | Only remove the listeners that match this function. |
| `context?` | `any` | Only remove the listeners that have this context. |
| `once?` | `boolean` | Only remove one-time listeners. |

#### Returns

[`DControllerCommandImpl`](DControllerCommandImpl.md)

`this`.

#### Implementation of

[DControllerCommand](../interfaces/DControllerCommand.md).[removeListener](../interfaces/DControllerCommand.md#removelistener)

#### Inherited from

utils.EventEmitter.removeListener

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24056

___

### size

▸ **size**(): `number`

#### Returns

`number`

#### Implementation of

[DControllerCommand](../interfaces/DControllerCommand.md).[size](../interfaces/DControllerCommand.md#size)

#### Defined in

[src/main/typescript/wcardinal/ui/d-controller-command-impl.ts:237](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-controller-command-impl.ts#L237)

___

### undo

▸ **undo**(): `void`

#### Returns

`void`

#### Implementation of

[DControllerCommand](../interfaces/DControllerCommand.md).[undo](../interfaces/DControllerCommand.md#undo)

#### Defined in

[src/main/typescript/wcardinal/ui/d-controller-command-impl.ts:252](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-controller-command-impl.ts#L252)
