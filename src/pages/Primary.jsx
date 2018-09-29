import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Square from './Square'
import {
  Typography
} from '@material-ui/core'

export const Primary = ({ classes, theme }) => {
  return (
    <div className={classes.primary}>
      <Typography variant='title' className={classes.rowLabel}>
        Primary
      </Typography>
      <Square
        bgColor={theme.palette.primary.light}
        // color={theme.palette.primary.contrastText}
      >
        light
      </Square>
      <Square
        bgColor={theme.palette.primary.main}
        // color={theme.palette.primary.contrastText}
      >
        main
      </Square>
      <Square
        bgColor={theme.palette.primary.dark}
        // color={theme.palette.primary.contrastText}
      >
        dark
      </Square>
    </div>
  )
}

const styles = {
  primary: {
    display: 'flex',
    alignItems: 'center',
  },
  rowLabel: {
    width: 120,
  },
}

export default withStyles(styles, { withTheme: true })(Primary)