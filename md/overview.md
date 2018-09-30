# Brief Overview of Material UI

[Material UI](https://material-ui.com) is a set of React components that implement [Google's Material Design](https://material.io/). To get a better ideal of what it is, review their [component demos](https://material-ui.com/demos/app-bar/).

## Theme

Material UI has a [default theme](https://material-ui.com/customization/default-theme/) which defines many aspects of an applications appearence. It includes things such as breakpoints, color palette, spacing and transitions.

### Theme override
The default theme can be overridden by using <code>createMuiTheme</code>. The theme overrides are kept in a file named <code>withRoot.js</code>, which in our project is in the /src director.

You can override any part of the theme. For example, the below overrides the color variants for the primary and secondary colors.
```js
const purpleGreen = createMuiTheme({
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

<code>withRoot</code> is a higher order component. By wrapping an app in it the theme is made available to the entire app.
```js
export default withRoot(App)
```


