---
id: esm
title: ES Module Imports
---

Sites built using a code bundler may choose to load `@sassoftware/va-report-components` with ES module imports. When loaded this way, the APIs are available as named imports.

[SASReportElement](api/SASReportElement.md) and the other custom elements are defined through side effects, so care must be taken to ensure `@sassoftware/va-report-components` is included at runtime. One way to do this is by adding a side effect import in the build's entry point or in the modules where `va-report-components` is used.

```js
import "@sassoftware/va-report-components";
```

A side effect import might not be necessary if the code uses an imported API directly.

```js
import { SASReportElement } from "@sassoftware/va-report-components";
const report = new SASReportElement();
document.body.appendChild(report);
```

For TypeScript applications, type imports are insufficent for ensuring that `va-report-components` will be included in the build.

```ts
// Type imports are NOT included at runtime
import type { SASReportElement } from "@sassoftware/va-report-components";
// This report will not load unless va-report-components is imported elsewhere
const report = document.getElementById("my-report") as SASReportElement;
```

## Usage notes

### Webpack

#### Configuration

`va-report-components` contains CSS files that might not work as intended when processed by webpack loaders. If your build uses loaders such as style-loader or css-loader, you should exclude `va-report-components`.

```js
// webpack.config.js
export default {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
        exclude: /va-report-components/,
      },
    ],
  },
};
```

#### SAS Report Packages

If your site hosts [exported SAS Report Packages](guides/export-report-package.md) alongside your webpack build, they may be referenced relative to `__webpack_public_path__`.

```js
import { SASReportElement } from "@sassoftware/va-report-components";
const report = new SASReportElement();
report.packageUri = `${__webpack_public_path__}reports/ExampleReport.sasreportpkg`;
```

### Vite

#### Configuration

`va-report-components` references some assets with the `new URL("...", import.meta.url)` syntax, a feature not yet fully supported in Vite dev builds. In order to load `va-report-components` in Vite dev builds, `@sassoftware/va-report-components` must be excluded from `optimizeDeps` in the Vite config. Then, all CommonJS modules imported by the package, both directly and indirectly, must be re-included.

```ts
// vite.config.js
export default defineConfig({
  optimizeDeps: {
    exclude: ["@sassoftware/va-report-components"],
    include: [
      "@tanstack/react-query",
      "classnames",
      "handlebars",
      "hoist-non-react-statics",
      "prop-types",
      "react-dom",
      "react-fast-compare",
      "react-redux",
      "void-elements",
      "warning",
    ],
  },
});
```

Known CommonJS dependencies are listed above, but the actual list can vary between applications. When a module needs to be added to the list, a message is logged in the browser console. Here is an example:

```text
SyntaxError: The requested module '/node_modules/prop-types/index.js?v=4776a820' does not provide an export named 'default'
```

Production builds are not affected by this issue.

#### SAS Report Packages

If you include [exported SAS Report Packages](guides/export-report-package.md) in your Vite project's
`public` directory, the packages may be referenced relative to `import.meta.env.BASE_URL`.

```js
import { SASReportElement } from "@sassoftware/va-report-components";
const report = new SASReportElement();
report.packageUri = `${import.meta.env.BASE_URL}reports/ExampleReport.sasreportpkg`;
```

### React

Custom elements such as `sas-report` can be rendered in React, but the `class` prop should be used rather than `className`.

```jsx
import '@sassoftware/va-report-components';

export const MyComponent(props) {
  return (
    <sas-report
      class="my-class"
      authenticationType="guest"
      url="http://my-viya-server.com"
      reportUri="/reports/reports/c3c6befb-3981-4c9e-b011-7dc11dec5e37"
    ></sas-report>
  )
}
```
