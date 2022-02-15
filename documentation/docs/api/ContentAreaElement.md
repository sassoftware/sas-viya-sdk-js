---
id: ContentAreaElement
title: ContentAreaElement
---

`ContentAreaElement` is a custom HTML element that displays the contents of a SAS Viya folder as tiles. This element extends <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement">`HTMLElement`</a>.

## Custom Element Tag

```html
<sas-content-area
  url="http://my-viya-server.com"
  initial-selection-index="0"
  selection-mode="single"
></sas-content-area>
```

## Attributes

### `initial-selection-index: number`

The index of the item to be initially selected. This is most useful for starting off in a selected state, without necessarily knowing the details of the content that will be displayed. This only applies to the initial display of the ContentAreaElement. Any selections by the user, or via `setSelectedIdentifiers` will override this value, and changing the value of `initial-selection-index` from that point on will have no effect.

### `selection-mode: string`

Specify the selection mode for the content.

#### Values

`multiple`

Multiple items can be selected using the checkbox. This is the default selection mode if `selection-mode` is not specified.

`single`

Only one item can be selected at a time.

### `url`

See [url](LogonWrapperProps.md#url).

### `authenticationType`

See [authenticationType](LogonWrapperProps.md#authenticationType).

## Properties

### `onSelect: (selectedItems: Item[], selectAll: boolean, lastSelectedItem: Item, selected?: boolean) => void`

A callback function that can be used to respond to the selection of items in the ContentAreaElement.

#### Arguments

`selectedItems: Item[]`

The [Items](Item.md) that are currently selected.

`selectAll: boolean`

Whether all of the items have been selected.

`lastSelectedItem: Item`

The most recently selected [Item](Item.md).

`selected?: boolean`

True if the onSelect was triggered by a selection, false if onSelect was triggered by a deselection.

## Methods

### `setSelectedIdentifiers: (itemIdentifiers: ItemIdentifier[]) => void`

A function that can be used to programmatically select content using ItemIdentifiers. See [ItemIdentifier](ItemIdentifier.md).

#### Arguments

`itemIdentifiers: ItemIdentifier[]`

A set of ItemIdentifiers that identify the items to select.