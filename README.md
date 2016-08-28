Rebel Progress Bar
==============

A simple vanilla web component to provide an easy to style and use progress bar.

- [Demo](http://revillweb.github.io/rebel-progress-bar/)

Polyfills
=====

To get this web component working in all major browser make sure you include the [skatejs-web-components.js](https://github.com/skatejs/web-components) polyfill before including this web component.

Usage
=====

There are two ways you can make use of this web component. You can use it as part of a bigger ES2015 project as ES2015 source, or you can include a compiled ES5 version.

ES5
---

You can simple included the compiled version into your project and make use of the custom element `rbl-repeater`.

```javascript
    <script src="dist/rebel-progress-bar.js"></script>
    <rebel-progress-bar percent="90"></rebel-progress-bar>
```

ES2015
------

For ES2015 projects you can install this component directly into your project using [npm](https://www.npmjs.com/).

`npm install rebel-progress-bar`

Then you can include it into your ES2015 project as you would any other module:

````javascript
import * as RebelProgressBar from 'node_modules/rebel-progress-bar/src/rebel-progress-bar';
````

**Note**: *`rebel-progress-bar.js` doesn't actually export anything but an import is required to have the custom element registered on the document.*

API
===

This component is currently very simple and has only a percent attribute which is used to set the current percentage.

Attributes
----------

| Attribute Name | Required | Type | Example | Comments |
| -------------- | -------- | ---- | ------- | -------- |
| percent        |   **Yes**  | Integer | 23 | The percentage required for display |


Example
=======

You can find a working example by running `index.html` in a modern web browser or take a look at the code below:

````html
<rebel-progress-bar percent="90"></rebel-progress-bar>
````

Contributing
============

Please submit any suggestions or changes via a pull request.