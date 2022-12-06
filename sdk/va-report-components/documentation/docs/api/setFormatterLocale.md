---
id: setFormatterLocale
title: setFormatterLocale
---

```
setFormatterLocale(locale): void
```

`setFormatterLocale` enables the user to set a language to be used for formatting numeric values and dates. If not specified this will fallback to either the language specified by calling setLocale, or the language specified in the browser settings.

## Arguments

### `locale: string | null`

The locale should be specified as a language code and optional country code. This is the same format used by [navigator.language](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/language)

### Examples

```javascript
window.addEventListener("vaReportComponents.loaded", function () {
  vaReportComponents.setFormatterLocale("fr");
});
```

```javascript
window.addEventListener("vaReportComponents.loaded", function () {
  vaReportComponents.setFormatterLocale("fr-CA");
});
```
