import React from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import purple from '@material-ui/core/colors/purple'
import green from '@material-ui/core/colors/green'
import blue from '@material-ui/core/colors/blue'
import teal from '@material-ui/core/colors/teal'
import CssBaseline from '@material-ui/core/CssBaseline'
import { Button } from '@material-ui/core'

// A theme with custom primary and secondary color.
// It's optional.

const dflt = createMuiTheme({

})

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


const blueTeal = createMuiTheme({
  palette: {
    primary: {
      light: blue[300],
      main: blue[500],
      dark: blue[700],
    },
    secondary: {
      light: teal[300],
      main: teal[500],
      dark: teal[700],
    },
  },
})

function withRoot(Component) {
  class WithRoot  extends React.Component {
    state = {
      theme: dflt
    }
    buttonClick = (event) => {
      console.log('buttonClick')
      let theme
      switch (event.target.name) {
        case 'purpleGreen':
          theme = purpleGreen
          break
        case 'blueTeal':
          theme = blueTeal
          break
        case 'default':
        default:
          theme = dflt
      }
      this.setState({ theme: theme })
    }
    render() {
      return (
        <MuiThemeProvider theme={this.state.theme}>
          <CssBaseline />
          <Component
            buttonClick={this.buttonClick}
            {...this.props}
          />
        </MuiThemeProvider>
      )
    }

  }
  return WithRoot
}

// function withRoot(Component) {
//   function WithRoot(props) {
//     return (
//       <MuiThemeProvider theme={t1}>
//         <CssBaseline />
//         <Component {...props} />
//       </MuiThemeProvider>
//     )
//   }
//   return WithRoot
// }

export default withRoot
