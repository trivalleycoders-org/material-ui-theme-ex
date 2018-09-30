import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import indigo from '@material-ui/core/colors/indigo'
import orange from '@material-ui/core/colors/orange'

const FunctionalComponent = ({ classes }) => {
    return (
      <div className={classes.classComponent}>
        <div className={classes.divOne}>Div One</div>
        <div className={classes.divTwo}>Div Two</div>
      </div>
    )
}

const styles = theme => ({
  classComponent: {
    display: 'flex',
  },
  divOne: {
    backgroundColor: indigo[200],
    width: 100,
    height: 100,
    margin: 10,
  },
  divTwo: {
    backgroundColor: orange[900],
    width: 100,
    height: 100,
    margin: 10,
  },
})

export default withStyles(styles)(FunctionalComponent)
