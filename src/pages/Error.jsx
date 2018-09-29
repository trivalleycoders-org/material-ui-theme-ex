import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Square from './Square'
import {
  Typography
} from '@material-ui/core'

export const Error = ({ classes, theme }) => {
  return (
    <div className={classes.error}>
      <Typography variant='title' className={classes.rowLabel}>
        Error
      </Typography>
      <Square
        bgColor={theme.palette.error.light}
        // color={theme.palette.error.contrastText}
      >
        light
      </Square>
      <Square
        bgColor={theme.palette.error.main}
        // color={theme.palette.error.contrastText}
      >
        main
      </Square>
      <Square
        bgColor={theme.palette.error.dark}
        // color={theme.palette.error.contrastText}
      >
        dark
      </Square>
    </div>
  )
}

const styles = {
  error: {
    display: 'flex',
    alignItems: 'center',
  },
  rowLabel: {
    width: 120,
  }
}

export default withStyles(styles, { withTheme: true })(Error)