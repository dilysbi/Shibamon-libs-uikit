# Shibamon UIkit

**This repository is not used anymore.

shibamon UIkit is a set of React components and hooks used to build pages on shibamon's apps. It also contains a theme file for dark and light mode.

## Install 

`yarn add shibamon-libs-uikit`

## Setup

### Theme

Before using shibamon UIkit, you need to provide the theme file to styled-component.

```
import { ThemeProvider } from 'styled-components'
import { light, dark } from 'shibamon-libs-uikit'
...
<ThemeProvider theme={isDark}>...</ThemeProvider>
```

### Reset

A reset CSS is available as a global styled component.

```
import { ResetCSS } from 'shibamon-libs-uikit'
...
<ResetCSS />
```

### Types

This project is built with Typescript and export all the relevant types.
