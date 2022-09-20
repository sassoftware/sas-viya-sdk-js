---
id: setLocale
title: setLocale
---

```
setLocale(locale): void
```

`setLocale` allows the user to set an override to the language specified in the browser settings.

## Arguments

### `locale: string`

The locale should be specified as a language code and optional country code. This is the same format used by [navigator.language](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/language)

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
