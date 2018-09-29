import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import Square from './Square'

export const Background = ({ classes, theme }) => {
  return (
    <div className={classes.background}>
      <Typography variant='title' className={classes.rowLabel}>
        Background
      </Typography>
      <Square
        bgColor={theme.palette.background.paper}
        // color={theme.palette.error.contrastText}
      >
        paper
      </Square>
      <Square
        bgColor={theme.palette.error.default}
        // color={theme.palette.error.contrastText}
      >
        default
      </Square>
    </div>
  )
}

const styles = {
  background: {
    display: 'flex',
    alignItems: 'center',
  },
  rowLabel: {
    width: 120,
  }
}

export default withStyles(styles, { withTheme: true })(Background)