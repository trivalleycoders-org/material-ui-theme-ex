import React from 'react'
import { withStyles } from '@material-ui/core/styles'

class ClassComponent extends React.Component {

  render() {

    const { classes } = this.props

    return (
      <div className={classes.classComponent}>
        <div className={classes.divOne}>Div One</div>
        <div className={classes.divTwo}>Div Two</div>
      </div>
    )
  }
}

const styles = theme => ({
  classComponent: {
    display: 'flex',
  },
  divOne: {
    backgroundColor: theme.palette.primary.main,
    width: 100,
    height: 100,
    margin: 10,
  },
  divTwo: {
    backgroundColor: theme.palette.secondary.main,
    width: 100,
    height: 100,
    margin: 10,
  },
})

export default withStyles(styles)(ClassComponent)
