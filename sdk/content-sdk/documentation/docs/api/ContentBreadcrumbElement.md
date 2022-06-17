---
id: ContentBreadcrumbElement
title: ContentBreadcrumbElement
---

`ContentBreadcrumbElement` is a custom HTML element that displays breadcrumb links allowing the user to navigate to previously visited folders. This element extends <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement">`HTMLElement`</a>.

## Custom Element Tag

```html
<sas-content-breadcrumb url="http://my-viya-server.com"
></sas-content-breadcrumb>
```

## Attributes

### `url`

See [url](LogonWrapperProps.md#url).

### `authenticationType`

See [authenticationType](LogonWrapperProps.md#authenticationType).

## Properties

### `onSelect: (breadcrumbPath: Item[]) => void`

A callback function that can be used to respond to a breadcrumb link being selected.

#### Arguments

`breadcrumbPath: Item[]`

An array of [Items](Item.md) representing the breadcrumb path, starting with the root.