import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Square from './Square'
import {
  Typography
} from '@material-ui/core'

export const Secondary = ({ classes, theme }) => {
  return (
    <div className={classes.secondary}>
      <Typography variant='title' className={classes.rowLabel}>
        Secondary
      </Typography>
      <Square
        bgColor={theme.palette.secondary.light}
        // color={theme.palette.secondary.contrastText}
      >
        light
      </Square>
      <Square
        bgColor={theme.palette.secondary.main}
        // color={theme.palette.secondary.contrastText}
      >
        main
      </Square>
      <Square
        bgColor={theme.palette.secondary.dark}
        // color={theme.palette.secondary.contrastText}
      >
        dark
      </Square>
    </div>
  )
}

const styles = {
  secondary: {
    display: 'flex',
    alignItems: 'center',
  },
  rowLabel: {
    width: 120,
  }
}

export default withStyles(styles, { withTheme: true })(Secondary)