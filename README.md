# @mels/babel-preset-tsc-pluggable

[![npm (scoped)](https://img.shields.io/npm/v/@mels/babel-preset-tsc-pluggable.svg)](https://www.npmjs.com/package/@mels/babel-preset-tsc-pluggable) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

Pluggable babel preset for some of my commonly used TypeScript and Styled Components configs.

## Plugins

This preset implements the following plugins:

- [babel-plugin-module-resolver](https://github.com/tleunen/babel-plugin-module-resolver)
- [babel-plugin-typescript-to-proptypes](https://github.com/milesj/babel-plugin-typescript-to-proptypes)
- [babel-plugin-styled-components](https://github.com/styled-components/babel-plugin-styled-components)

## Install

With npm...

```bash
npm install @mels/babel-preset-tsc-pluggable --save-dev
```

With yarn...

```bash
yarn add @mels/babel-preset-tsc-pluggable -D
```

## Usage

**.babelrc**

```json
{
  "presets": ["@mels/tsc-pluggable"]
}
```

With [Next.js](https://nextjs.org/):

```json
{
  "presets": ["next/babel", "@mels/tsc-pluggable"]
}
```

Each plugin is turned on by default, but can be turned off manually:

```json
{
  "presets": [
    "next/babel",
    [
      "@mels/tsc-pluggable",
      {
        "moduleResolver": false,
        "proptypes": false,
        "styledComponents": false
      }
    ]
  ]
}
```

## Module Resolver Usage with TypeScript

This preset sets the following options for the module resolver:

```js
{
  root: ['./'],
  alias: {
    components: './src/components'
  },
  extensions: ['.js', '.jsx', '.ts', '.tsx']
}
```

In addition to this, to get things working properly you'll need to set `baseUrl` and `paths` in `tsconfig.json`, e.g:

```json
{
  "baseUrl": ".",
  "paths": {
    "components/*": ["src/components/*"]
  }
}
```
