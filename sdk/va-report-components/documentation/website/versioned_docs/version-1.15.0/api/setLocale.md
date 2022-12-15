---
id: version-1.15.0-setLocale
title: setLocale
original_id: setLocale
---

```
setLocale(locale): void
```

`setLocale` enables the user to set an override for the language that is specified in the browser settings.

## Arguments

### `locale: string | null`

The locale should be specified as a language code and an optional country code. This is the same format that is used by [navigator.language](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/language)

### Examples

```javascript
window.addEventListener("vaReportComponents.loaded", function () {
  vaReportComponents.setLocale("fr");
});
```

```javascript
window.addEventListener("vaReportComponents.loaded", function () {
  vaReportComponents.setLocale("fr-CA");
});
```
