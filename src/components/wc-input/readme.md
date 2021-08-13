# wc-input



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute     | Description          | Type      | Default     |
| ------------- | ------------- | -------------------- | --------- | ----------- |
| `disabled`    | `disabled`    | input disabled       | `boolean` | `undefined` |
| `label`       | `label`       | label of input       | `string`  | `undefined` |
| `name`        | `name`        | name of input        | `string`  | `undefined` |
| `placeholder` | `placeholder` | placeholder of input | `string`  | `undefined` |
| `value`       | `value`       | value of input       | `string`  | `undefined` |


## Events

| Event         | Description      | Type                  |
| ------------- | ---------------- | --------------------- |
| `changeValue` | click event emit | `CustomEvent<string>` |


## Dependencies

### Used by

 - [sample-container](../../containers/sample-container)

### Graph
```mermaid
graph TD;
  sample-container --> wc-input
  style wc-input fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
