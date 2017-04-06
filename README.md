# React-Pure [![Build Status](https://img.shields.io/travis/PaulLeCam/react-pure/master.svg)](https://travis-ci.org/PaulLeCam/react-pure) [![npm version](https://img.shields.io/npm/v/react-pure.svg)](https://www.npmjs.com/package/react-pure)

[React](http://facebook.github.io/react/) components using [Pure CSS](http://purecss.io/).  

## Installation

### npm + browserify/webpack

```bash
npm install react-pure # npm
yarn add react-pure # yarn
```

React is also required as a peer dependency.

### Others

You can download UMD builds from the [dist folder](https://github.com/PaulLeCam/react-pure/tree/master/dist).  
The components are accessible in the `window.ReactPure` object.

## Usage

The components documented below are exposed as CommonJS modules and can be accessed in the following ways:

```js
// ES6
import { Button, Cell } from 'react-pure';

// CommonJS
var Button = require('react-pure').Button;
// or
var Pure = require('react-pure');
var Button = Pure.Button;

// Direct access to the module
var Button = require('react-pure/lib/Button');
```

## Components

### Button

[Pure CSS reference](http://purecss.io/buttons/)

#### Properties

- `active: bool` (optional, defaults to *false*): adds the `pure-button-active` class.
- `disabled: bool` (optional, defaults to *false*): adds the `pure-button-disabled` class.
- `primary: bool` (optional, defaults to *false*): adds the `pure-button-primary` class.
- `href: string` (optional): if set, renders a `<a>` element instead of `<button>`.

### Cell

A Cell is an element of a [Pure CSS Grid](http://purecss.io/grids/)

#### Properties

- `size: string` (optional, defaults to *1*): adds the `pure-u-{size}` class. You can use the `/` separator instead of `-`, ex: `<Cell size='1/3'>`.
- `sm: string` (optional): adds the `pure-u-sm-{sm}` class.
- `md: string` (optional): adds the `pure-u-md-{md}` class.
- `lg: string` (optional): adds the `pure-u-lg-{lg}` class.
- `xl: string` (optional): adds the `pure-u-xl-{xl}` class.

### Menu

[Pure CSS reference](http://purecss.io/menus/)

#### Properties

- `horizontal: bool` (optional, defaults to *false*): adds the `pure-menu-horizontal` class.
- `scrollable: bool` (optional, defaults to *false*): adds the `pure-menu-scrollable` class.

### MenuItem

Renders a `<li>` node with the `pure-menu-item` class by default.

#### Properties

- `allowHover: bool` (optional, defaults to *false*): adds the `pure-menu-allow-hover` class.
- `disabled: bool` (optional, defaults to *false*): adds the `pure-menu-disabled` class.
- `hasChildren: bool` (optional, defaults to *false*): adds the `pure-menu-has-children` class.
- `selected: bool` (optional, defaults to *false*): adds the `pure-menu-selected` class.

### Table

[Pure CSS reference](http://purecss.io/tables/)

#### Properties

- `bordered: bool` (optional, defaults to *false*): adds the `pure-table-bordered` class.
- `horizontal: bool` (optional, defaults to *false*): adds the `pure-table-horizontal` class.
- `striped: bool` (optional, defaults to *false*): adds the `pure-table-striped` class.

## Changelog

See [CHANGELOG](https://github.com/PaulLeCam/react-pure/blob/master/CHANGELOG.md) file.

## License

MIT  
See [LICENSE](LICENSE) file.
