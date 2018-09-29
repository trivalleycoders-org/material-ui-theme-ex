import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Square from './Square'
import {
  Typography
} from '@material-ui/core'

export const Divider = ({ classes, theme }) => {
  return (
    <div className={classes.divider}>
      <Typography variant='title' className={classes.rowLabel}>
        Divider
      </Typography>
      <Square
        bgColor={theme.palette.divider}
        // color={theme.palette.primary.contrastText}
      >
        light
      </Square>
    </div>
  )
}

const styles = {
  divider: {
    display: 'flex',
    alignItems: 'center',
  },
  rowLabel: {
    width: 120,
  },
}

export default withStyles(styles, { withTheme: true })(Divider)