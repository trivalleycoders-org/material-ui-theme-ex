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
      >
        light
      </Square>
      <Square
        bgColor={theme.palette.primary.main}
      >
        main
      </Square>
      <Square
        bgColor={theme.palette.primary.dark}
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