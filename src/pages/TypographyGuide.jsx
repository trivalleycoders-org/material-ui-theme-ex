import React from 'react'
import { withStyles } from '@material-ui/core'
import { Typography } from '@material-ui/core'

const TypographyGuide = ({ classes }) => {
  return (
    <div>
      <Typography variant='caption'>Caption</Typography>
      <Typography variant='body1'>Body1</Typography>
      <Typography variant='body2'>Body2</Typography>
      <Typography variant='subheading'>Subheading</Typography>
      <Typography variant='headline'>Headline</Typography>
      <Typography variant='title'>Title</Typography>
      <Typography variant='display1'>Display1</Typography>
      <Typography variant='display2'>Display2</Typography>
      <Typography variant='display3'>Display3</Typography>
      <Typography variant='display4'>Display4</Typography>

    </div>
  )
}

const styles = {}

export default withStyles(styles)(TypographyGuide)