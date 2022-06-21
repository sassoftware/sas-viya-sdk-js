---
id: ContentTreeElement
title: ContentTreeElement
---

`ContentTreeElement` is a custom HTML element that displays a customizable SAS Viya folder tree for navigation. This element extends <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement">`HTMLElement`</a>.

## Custom Element Tag

```html
<sas-content-tree
  url="http://my-viya-server.com"
></sas-content-tree>
```

## Attributes

### `url`

See [url](LogonWrapperProps.md#url).

### `authenticationType`

See [authenticationType](LogonWrapperProps.md#authenticationType).

## Properties

### `onSelect: (node: Node, item: Item) => void`

A callback function that can be used to respond to the selection of nodes in the ContentTreeElement.

#### Arguments

`node: Node`

This is an internal component state item that is of limited use for consumers.

`item: Item`

The selected [Item](Item.md).

### `onExpand: (node: Node, expanded: boolean, item: Item) => void`

A callback function that can be used to respond to the expansion of nodes in the ContentTreeElement.

#### Arguments

`node: Node`

This is an internal component state item that is of limited use for consumers.

`expanded: boolean`

Whether or not the node was expanded.

`item: Item`

The expanded [Item](Item.md).