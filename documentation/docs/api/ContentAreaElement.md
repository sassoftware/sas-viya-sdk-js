---
id: ContentAreaElement
title: ContentAreaElement
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

## Properties
### `folderIdentifier: ItemIdentifier`

Specify a folder on the SAS Viya server that contains the content to display. Folder can mean several things, as specified by [ItemIdentifier](ItemIdentifier.md).

### `itemIdentifiers: ItemIdentifier[]`

Specify an array of individual items on the SAS Viya server to display. See [ItemIdentifier](ItemIdentifier.md)

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

True if the onSelect was triggered by a selection, false if onSelect was triggered by an un-selection.