import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import {
  Button,
} from '@material-ui/core'

export const Buttons = ({ classes, theme }) => {
  return (
    <div id='buttons' className={classes.buttons}>


      <div className={classes.row}>

        <Button color='default'>default</Button>
        <Button color='inherit'>inherit</Button>
        <Button color='primary'>primary</Button>
        <Button color='secondary'>secondary</Button>
      </div>
    </div>
  )
}

const styles = theme => ({
  buttons: {
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'center',
  },
  rowLabel: {
    width: 120,
  },
  divider: {
    marginRight: theme.spacing.unit * 2,
    marginLeft: theme.spacing.unit * 2,
  },
  row: {
    display: 'flex',
  },
})

export default withStyles(styles, { withTheme: true })(Buttons)