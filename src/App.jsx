import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import withRoot from './withRoot'
import ClassComponent from './ClassComponent'
import FunctionalComponent from './FunctionalComponent'

class App extends React.Component {

  render() {

    const { classes } = this.props

    return (
      <div className={classes.app}>
        <ClassComponent />
        <FunctionalComponent />
      </div>
    )
  }
}

const styles = theme => ({
  app: {
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'center',
    paddingTop: theme.spacing.unit * 10
  },
})

export default withRoot(withStyles(styles)(App))
