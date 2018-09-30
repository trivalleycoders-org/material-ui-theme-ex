# Styling Material UI

Material UI uses a modified version of [JSS](http://cssinjs.org).

Styling follows this basic pattern
- Import <code>withStyles</code>
- create an object (usually named 'styles') with styles for the component
- Wrap the component with <code>withStyles</code>

```js
import { withStyles } from '@material-ui/core/styles'

const MyComponent = () => {
  // component code
}

const styles = {
  root: {
    paddingTop: 10
  }
}

export default withStyles(styles)(MyComponent)
```

When you wrap a component with <code>withStyles</code> and passing <code>withStyles</code> the style object, your component will receive an object named <code>classes</code>. <code>classes</code> contains the names of the styles you defined as strings. The <code>classes</code> object is used as the value of the <code>className</code> property.

```js
import { withStyles } from '@material-ui/core/styles'

const MyComponent = ({ classes }) => {
  return (
    <div className={classes.root}>
      // more component code
    </div>
  )
}

const styles = {
  root: {
    paddingTop: 10
  }
}

export default withStyles(styles)(MyComponent)

```

### Styles with & without the theme object
Styles can be written with and without the theme object

**Without**
```js
const styles = {

}
```

**With**
```js
const styles = theme => ({

})
```

### Using the theme object

If the theme object is past you can use its properties
```js
const styles = theme => ({
  body1: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
  },

})
```

### You can make it a function

cons tstyles = theme => {
  const unit = theme.spacing.unit
  return ({
    wrapper: {
      backgroundColor: 'white',
      padding: `${unit * 4}px ${unit * 8}px ${unit * 4}px ${unit * 8}px`
    }
  })
}

### Using a color

Where appropriate, you can use [colors from the Material Design design specification](https://material-ui.com/style/color/#color-palette) that are not in the palette. Not aht these colors have both a hue, such as red or blue, and a shade shu as red[500]. Shades range from the lightest of red[50] to the darkest red[900].

import purple from '@material-ui/core/colors/purple'

const styles = {
  app: {
    backgroundColor: theme.palette.purple[800],
  }
}



## Breakpoints

I have not fully expored the breakpoint system yet. There could be more to it.

The sizes are xs, sm, md, lg, xl

Breakpoints are created like this

```js
const styles = theme => ({
  wrapper: {
    backgroundColor: 'orange',
    [theme.breakpoints.up('md')]: {
      padding: '15%',
    }
  }
})
```
Examples
```js
[theme.breakpoints.up('md')]  // applies to size medium and larger

[theme.breakpoints.only('md')] // applies to size medium only

[theme.breakpoints.down('md')] // applies to size medium and smaller
```

## Dynamic Styles
A common practice in React application is to use the 'style' property to create dynamic properties. This is pure React and not part of Material UI. However, it is commponly used in applications that use Material UI.

```js
const MyComponent = ({ color }) => {
  const divStyle = {
    backgroundColor: color,
  }

  return (
    <div style={divStyle}>
      //
    </div>
  )
}
```