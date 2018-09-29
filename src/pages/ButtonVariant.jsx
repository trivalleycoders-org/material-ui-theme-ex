import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import {
  Button,
} from '@material-ui/core'

export const ButtonVariant = ({ classes, theme, color }) => {
  return (
    <div id='buttons' className={classes.buttons}>
      <div className={classes.row}>
        <div className={classes.divider}></div>
        <Button color={color} variant='text'>text</Button>
        <div className={classes.divider}></div>
        <Button color={color} variant='flat'>flat</Button>
        <div className={classes.divider}></div>
        <Button color={color} variant='outlined'>outlined</Button>
        <div className={classes.divider}></div>
        <Button color={color} variant='contained'>contained</Button>
        <div className={classes.divider}></div>
        <Button color={color} variant='raised'>raised</Button>
        <div className={classes.divider}></div>
        <Button color={color} variant='fab'>fab</Button>
        <div className={classes.divider}></div>
        <Button color={color} variant='extendedFab'>extendedFab</Button>
        <div className={classes.divider}></div>
      </div>
    </div>
  )
}

const styles = theme => ({
  buttons: {
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'center'
  },
  divider: {
    marginRight: theme.spacing.unit * 2,
    marginLeft: theme.spacing.unit * 2,
    height: '60%',
    border: `0.5px solid ${theme.palette.divider}`
  },
  row: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
  },
})

export default withStyles(styles, { withTheme: true })(ButtonVariant)