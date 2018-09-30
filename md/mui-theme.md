# Material UI Theme

Material UI comes with a [default theme](https://material-ui.com/customization/default-theme/). You can override the theme's default values. In the Events project we do so in the file <code>src/ui/withRoot.js</code>.

## Overriding the default theme values
Import <code>MuiThemeProvider</code> & <code>createMuiTheme</code>.
```js
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
```
Create a theme using <code>createMuiTheme()</code>. You only need to reference the properties that need to change in order to achieve your design goals.
```js
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      light: purple[300],
      main: purple[500],
      dark: purple[700],
    },
    secondary: {
      light: green[300],
      main: green[500],
      dark: green[700],
    },
  },
})
```
The resulting theme is an object that is a merge of the default them and your overrides.

Create a higher order function that wrap the passed in component with <code>MuiThemeProvider</code>.
```js
function withRoot(Component) {
  function WithRoot(props) {
    return (
      <MuiThemeProvider theme={theme}>
        <Component {...props} />
      </MuiThemeProvider>
    )
  }
  return WithRoot
}
```

Wrap a root level component in withRoot which makes the new theme (default values + overrides)
```js
import withRoot from '../withRoot'

// component code

export default withRoot(App)

```

The combined default theme with overrides is not available to all sub-components of <code>App</code>.




<span style="color: yellow">- Show withRoot.js</span>



> You should always you theme properties and never duplicate properties that are in the theme. For example, say the theme.primary.main has a value of '#ff0000' (red). You have a component tht needs a red background, you should get this color from theme.primary.main and not write <code>backgroundColor: '#ff0000',</code>.

Theme properties should be used whereever they apply. This way, if the designer wants to make a change, say a color value, it will update throughout the entire application, avoiding the need to search through the code to find every instance of the color.

## Overview

The [Material UI default theme](https://material-ui.com/customization/default-theme/) defines many aspects of an applications appearance. You can override the values of theme properties as shown below.

- The example shows overriding the primary and secondary colors of the theme's color palette.
- The <code>withRoot()</code> function is a higher order component that is used to wrap an applications root component. Doing so makes the theme available to all sub-components.


```js
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      light: purple[300],
      main: purple[500],
      dark: purple[700],
    },
    secondary: {
      light: green[300],
      main: green[500],
      dark: green[700],
    },
  },
})

function withRoot(Component) {
  function WithRoot(props) {
    return (
      <MuiThemeProvider theme={theme}>
        <Component {...props} />
      </MuiThemeProvider>
    )
  }
  return WithRoot
}
```




