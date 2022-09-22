---
id: version-0.8.0-ContentLocationsElement
title: ContentLocationsElement
original_id: ContentLocationsElement
---

`ContentLocationsElement` is a custom HTML element that displays a customizable SAS Viya "locations" list for navigation. Locations are typically Viya folders. This element extends <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement">`HTMLElement`</a>.

## Custom Element Tag

```html
<sas-content-locations
  url="http://my-viya-server.com"
></sas-content-locations>
```

## Attributes

### `url`

See [url](LogonWrapperProps.md#url).

### `authenticationType`

See [authenticationType](LogonWrapperProps.md#authenticationType).

## Properties

### `onSelect: (item: Item) => void`

A callback function that can be used to respond to the selection of a location in the ContentLocationsElement.

#### Arguments

`item: Item`

The selected [Item](Item.md).

### `showSeparator: boolean | (rowIndex: number) => boolean`

A boolean or function used to specify which locations should have a separator above them in the UI. When using the function version, return true for rowIndices for locations which should show a separator.