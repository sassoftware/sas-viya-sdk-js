---
id: api-reference
title: API Reference
---

The SAS Content SDK provides a set of components and APIs that enable you to render tiles representing items (such as Report and Models) stored in SAS Viya. It also enables
you to use SAS content items to drive your own processes or to interact with SAS Visual
Analytics SDK.

## Top-Level Exports

- [`ContentAreaElement`](api/ContentAreaElement.md)
- [`ContentBreadcrumbElement`](api/ContentBreadcrumbElement.md)
- [`ContentGroupElement`](api/ContentGroupElement.md)
- [`ContentTreeElement`](api/ContentTreeElement.md)
- [`getSASJobExecutionUrl`](api/getSASJobExecutionUrl.md)

## Loading with a script element

When you load the library with a script element, the Content SDK components are not ready to configure and use until all of the other assets are loaded. The `contentSdkComponents.loaded` event is dispatched once it is ready.

```html
<script async src="https://cdn.developer.sas.com/packages/content-components/latest/dist/umd/content-sdk-components.js"></script>
<script>
  window.addEventListener('contentSdkComponents.loaded', function() {
    // The SAS Content SDK is loaded and ready
  });
</script>
```

## Styling Components

The SAS Content SDK components accept CSS styles by setting the "class" or "style" attributes of a component. For example:

```html
<style>
  .customClass {
    padding-top: 5rem;
  }
</style>

<sas-content-area
  url="http://my-viya-server.com"
  initial-selection-index="0"
  selection-mode="single"
  class="customClass"
  style="height: 30rem;"
></sas-content-area> 
```