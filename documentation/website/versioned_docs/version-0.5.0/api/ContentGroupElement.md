---
id: version-0.5.0-ContentGroupElement
title: ContentGroupElement
original_id: ContentGroupElement
---

`ContentGroupElement` is a custom HTML element that connects contained Content SDK components together, and enables cross component functionality, such as folder navigation, selection, and filtering.  This element extends <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement">`HTMLElement`</a>.

In cases of nested grouping, components belong to the nearest ancestor group.

## Custom Element Tag

```html
<sas-content-group>
  <!-- Content SDK components can be embedded within, along with any other markup for the page -->
  <!-- Content SDK components will automatically detect the nearest sas-content-group and use -->
  <!-- standard group behavior unless overriden an the individual component level -->
</sas-content-group>
```

## Properties

### `initialNavigationValue: ContentNavigationValue`

Specify initial properties related to content navigation for components in this group.

### `initialNavigationValue.location?: ItemIdentifier`

The initial location that should be displayed by components such as the [ContentAreaElement](ContentAreaElement.md). See [ItemIdentifier](ItemIdentifier.md).

### `initialNavigationValue.locationContextPath?: ItemIdentifier[]`

The initial location that hierarchical, path-based components should display, such as [ContentTreeElement](ContentTreeElement.md) or [ContentBreadcrumbElement](ContentBreadcrumbElement.md). See [ItemIdentifier](ItemIdentifier.md).

### `initialNavigationValue.locations?: LocationIdentifier[]`

The initial set of root locations to be used by hierarchical components such as [ContentTreeElement](ContentTreeElement.md). See [LocationIdentifier](LocationIdentifier.md).

### `initialSelectionValue: ItemIdentifier[]`

An array of [ItemIdentifiers](ItemIdentifier.md) which will be initially selected in the components in this group. If you specify any items that are not displayed in one of the components in the group, then those items are ignored.

### `initialFilterValue: { queryModeFilter: string; }`

Specify options for filtering the content displayed in the content group.

### `initialFilterValue.queryModeFilter: string`

A SAS REST filter that is forwarded to underlying service requests. For example, to filter content to only show reports, use the following vaue: `eq(contentType,'report')`. Any type that can be parented to a folder is supported.
