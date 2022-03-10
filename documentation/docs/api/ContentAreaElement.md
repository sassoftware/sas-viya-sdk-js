---
id: ContentAreaElement
title: ContentAreaElement
---

`ContentAreaElement` is a custom HTML element that displays the contents of a SAS Viya folder as either a tile or a table view. By default, it includes navigation breadcrumbs along with sorting and view-switching controls. This element extends <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement">`HTMLElement`</a>.

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

### `authentication-type`

See [authenticationType](LogonWrapperProps.md#authenticationType).

### `initial-view: string`

Specify the initial view for the ContentArea.

#### Values

`tileView`

A tile-based view, the default if unspecified.

`tableView`

A table-based view with rows and columns.

### `initial-hidden-columns: string`

Specify any columns that will be initially hidden in table view. The values must be specified in a comma-separated string, such as "name,type,modifiedBy".

#### Values

name, dateModified, modifiedBy, dateCreated, createdBy, type

### `hide-breadcrumb: boolean`

Specify whether the breadcrumb portion of the ContentAreaElement should be hidden. This can be useful when displaying a [ContentBreadcrumbElement](ContentBreadcrumbElement.md) elsewhere in the layout. Since HTML attributes don't support booleans, only the presence of this attribute is required to enable it.

### `hide-controls: boolean`

Specify whether the sorting and view switching controls should be hidden. Since HTML attributes don't support booleans, only the presence of this attribute is required to enable it.

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
### `onBreadcrumbSelect: (breadcrumbPath: Item[]) => void`

A callback function that can be used to respond to a breadcrumb link being selected.

#### Arguments

`breadcrumbPath: Item[]`

An array of [Items](Item.md) representing the breadcrumb path, starting with the root.

## Methods

### `setSelectedIdentifiers: (itemIdentifiers: ItemIdentifier[]) => void`

A function that can be used to programmatically select content using ItemIdentifiers. See [ItemIdentifier](ItemIdentifier.md).

#### Arguments

`itemIdentifiers: ItemIdentifier[]`

A set of ItemIdentifiers that identify the items to select.