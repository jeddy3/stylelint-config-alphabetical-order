# stylelint-config-alphabetical-order

[![NPM version](https://img.shields.io/npm/v/stylelint-config-alphabetical-order.svg)](https://www.npmjs.com/package/stylelint-config-alphabetical-order) [![Actions Status](https://github.com/jeddy3/stylelint-config-alphabetical-order/workflows/node-ci/badge.svg)](https://github.com/jeddy3/stylelint-config-alphabetical-order/actions)

A shareable config for [Stylelint](https://stylelint.io) that alphabetically orders properties.

## Installation

```bash
npm install --save-dev stylelint-config-alphabetical-order
```

## Usage

Update your `stylelint` config to:

```diff json
{
  "extends": [
    "stylelint-config-standard",
+   "stylelint-config-alphabetical-order"
  ]
}
```

## Details

The config bundles and configures the [stylelint-order](https://www.npmjs.com/package/stylelint-order) plugin so that:

- properties are ordered alphabetically
- the [`all`](https://drafts.csswg.org/css-cascade/#all-shorthand) property comes first regardless
- declarations come before nested rules
- custom properties come before properties
- nested style rules come before nested at-rules

The [standard Stylelint config](https://www.npmjs.com/package/stylelint-config-standard) includes [a rule](https://stylelint.io/user-guide/rules/declaration-block-no-shorthand-property-overrides) that'll flag any shorthand property overrides introduced by reordering.

## [Changelog](CHANGELOG.md)

## [License](LICENSE)
