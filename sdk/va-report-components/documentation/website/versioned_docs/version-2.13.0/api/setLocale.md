---
id: version-2.13.0-setLocale
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

## Examples

### Script Tag

```javascript
window.addEventListener("vaReportComponents.loaded", function() {
  vaReportComponents.setLocale("fr");
});
```

```javascript
window.addEventListener("vaReportComponents.loaded", function() {
  vaReportComponents.setLocale("fr-CA");
});
```

### ESM

```javascript
import { setLocale } from "@sassoftware/va-report-components";
setLocale("fr");
```

```javascript
import { setLocale } from "@sassoftware/va-report-components";
setLocale("fr-CA");
```
