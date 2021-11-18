---
id: version-0.2.0-ContentAreaElement
title: ContentAreaElement
original_id: ContentAreaElement
---

`ContentAreaElement` is a custom HTML element that renders an entire report. This element extends <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement">`HTMLElement`</a>.

## Custom Element Tag

```html
<sas-content-area
  url="http://my-viya-server.com"
></sas-content-area>
```

## Attributes

### `url: string`

Specify the URL of the SAS Viya server that hosts the content to display. This is the full context root, including the protocol,
optional port, and host.

### `initial-selection-index: number`

The index of the item to be initially selected. This is most useful for starting off in a selected state, without necessarily knowing the details of the content that will be displayed. This only applies to the initial display of the ContentAreaElement. Any selections by the user, or via `setSelectedIdentifiers` will override this value, and changing the value of `initial-selection-index` from that point on will have no effect.

### `selection-mode: string`

Specify the selection mode for the content.

#### Values

`multiple`

Multiple items can be selected using the checkbox. This is the default selection mode if `selection-mode` is not specified.

`single`

Only one item can be selected at a time.

## Properties
### `folderIdentifier: ItemIdentifier`

Specify a folder on the SAS Viya server that contains the content to display. Folder can mean several things, as specified by [ItemIdentifier](ItemIdentifier.md).

### `itemIdentifiers: ItemIdentifier[]`

Specify an array of individual items on the SAS Viya server to display. See [ItemIdentifier](ItemIdentifier.md).

### `contentFilterConfig: { queryModeFilter: string; }`

Specify options for filtering the content displayed in the content area.

### `contentFilterConfig.queryModeFilter: string`

A SAS REST filter that is forwarded to underlying service requests. For example, to filter content to only show reports, use the following vaue: `eq(contentType,'report')`.

## Methods
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

### `setSelectedIdentifiers: (itemIdentifiers: ItemIdentifier[]) => void`

A function that can be used to programmatically select content using ItemIdentifiers. See [ItemIdentifier](ItemIdentifier.md).

#### Arguments

`itemIdentifiers: ItemIdentifier[]`

A set of ItemIdentifiers that identify the items to select.