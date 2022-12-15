---
id: version-1.15.0-setFormatterLocale
title: setFormatterLocale
original_id: setFormatterLocale
---

```
setFormatterLocale(locale): void
```

`setFormatterLocale` enables the user to set the language that is used to format numeric values and dates. If not specified, the language will fallback to the one that is specified by calling setLocale or the one is specified in the browser settings.

## Arguments

### `locale: string | null`

The locale should be specified as a language code and an optional country code. This is the same format that is used by [navigator.language](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/language)

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
