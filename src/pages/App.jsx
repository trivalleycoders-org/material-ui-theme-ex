import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import withRoot from '../withRoot'
import AppBar from './AppBar'
import ThemeGuide from './ThemeGuide'

class App extends React.Component {

  render() {

    const { buttonClick, classes } = this.props

    return (
      <div className={classes.app}>
        <AppBar
          buttonClick={buttonClick}
        />
        <ThemeGuide />
      </div>
    )
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
}

const styles = theme => ({
  app: {
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'center',
    paddingTop: theme.spacing.unit * 10
    // backgroundColor: 'red',
  },
})

export default withRoot(withStyles(styles)(App))
