# Crosswise UIkit

[![Version](https://img.shields.io/npm/v/crosswise-uikit)](https://www.npmjs.com/package/crosswise-uikit) [![Size](https://img.shields.io/bundlephobia/min/crosswise-uikit)](https://www.npmjs.com/package/crosswise-uikit)

Crosswise UIkit is a set of React components and hooks used to build pages on Crosswise's apps. It also contains a theme file for dark and light mode.

## Install

`yarn add crosswise-uikit`

## Setup

### Theme

Before using Crosswise UIkit, you need to provide the theme file to styled-component.

```
import { ThemeProvider } from 'styled-components'
import { light, dark } from 'crosswise-uikit'
...
<ThemeProvider theme={isDark}>...</ThemeProvider>
```

### Reset

A reset CSS is available as a global styled component.

```
import { ResetCSS } from 'crosswise-uikit'
...
<ResetCSS />
```

### Types

This project is built with Typescript and export all the relevant types.
