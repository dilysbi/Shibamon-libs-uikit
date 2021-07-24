# Flan Swap UIkit

**This repository is not used anymore. See the [https://github.com/FlanSwap/FlanSwap-toolkit](FlanSwap toolkit) instead**

[![Version](https://img.shields.io/npm/v/flanswap-libs-uikit)](https://www.npmjs.com/package/flanswap-libs-uikit) [![Size](https://img.shields.io/bundlephobia/min/flanswap-libs-uikit)](https://www.npmjs.com/package/flanswap-libs-uikit)

FlanSwap UIkit is a set of React components and hooks used to build pages on FlanSwap's apps. It also contains a theme file for dark and light mode.

## Install 

`yarn add flanswap-libs-uikit`

## Setup

### Theme

Before using FlanSwap UIkit, you need to provide the theme file to styled-component.

```
import { ThemeProvider } from 'styled-components'
import { light, dark } from 'flanswap-libs-uikit'
...
<ThemeProvider theme={isDark}>...</ThemeProvider>
```

### Reset

A reset CSS is available as a global styled component.

```
import { ResetCSS } from 'flanswap-libs-uikit'
...
<ResetCSS />
```

### Types

This project is built with Typescript and export all the relevant types.
