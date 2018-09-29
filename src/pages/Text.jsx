import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Square from './Square'
import {
  Typography
} from '@material-ui/core'

export const Text = ({ classes, theme }) => {
  return (
    <div className={classes.text}>
      <Typography variant='title' className={classes.rowLabel}>
        Text
      </Typography>
      <Square
        // bgColor={theme.palette.error.light}
        // color={theme.palette.error.contrastText}
      >
        <span style={{color: theme.palette.text.primary}}>text primary</span>
      </Square>
      <Square
        // bgColor={theme.palette.error.main}
        // color={theme.palette.error.contrastText}
      >
        <span style={{color: theme.palette.text.secondary}}>text secondary</span>
      </Square>
      <Square
        // bgColor={theme.palette.error.dark}
        // color={theme.palette.error.contrastText}
      >
        <span style={{color: theme.palette.text.disabled}}>text disabled</span>
      </Square>
      <Square
        // bgColor={theme.palette.error.dark}
        // color={theme.palette.error.contrastText}
      >
        <span style={{color: theme.palette.text.hint}}>text hint</span>
      </Square>
    </div>
  )
}

const styles = {
  text: {
    display: 'flex',
    alignItems: 'center',
  },
  rowLabel: {
    width: 120,
  }
}

export default withStyles(styles, { withTheme: true })(Text)