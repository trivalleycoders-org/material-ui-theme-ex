import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import ButtonColor from './ButtonColor'
import ButtonVariant from './ButtonVariant'
import BottomNavigation from './BottomNavigation'
import TypographyGuide from './TypographyGuide'
import Palette from './Palette'

const ThemeGuide = ({ classes }) => {
  return (
    <div id='app' className={classes.app}>
      <Typography variant='display4' align='center' gutterBottom={true} className={classes.display4}>
        Material UI Theme
      </Typography>

      <Typography variant='display3' align='center' className={classes.display3}>
        Palette
      </Typography>
      <Palette />

      <Typography variant='display3' align='center' className={classes.display3}>
        Buttons
      </Typography>
      <Typography variant='display2' className={classes.display2}>
        Color Property
      </Typography>
      <ButtonColor />
      <Typography variant='display2' className={classes.display2}>
        Variant Property
      </Typography>
      <ButtonVariant color='default'/>
      <ButtonVariant color='inherit'/>
      <ButtonVariant color='primary'/>
      <ButtonVariant color='secondary'/>
      <Typography variant='display3' align='center' className={classes.display3}>
        Typography
      </Typography>
      <TypographyGuide />
      <Typography variant='display3' align='center' className={classes.display3}>
        Bottom Navigation
      </Typography>
      <BottomNavigation />
    </div>
  )
}

const styles = theme => ({
  display4: {
    margin: '32px 0 16px -.02em'
  },
  display3: {
    margin: '32px 0 24px 0'
  },
  display2: {
    margin: '32px 0 24px 0'
  },

  div: {
    width: 100,
    // backgroundColor: 'orange',
  },
  display1: {
    // paddingTop: theme.spacing.unit * 5,
    // paddingBottom: theme.spacing.unit * 4,
  },
  title: {
    // paddingTop: theme.spacing.unit * 3,
    // paddingBottom: theme.spacing.unit * 3,
  },
})

export default withStyles(styles)(ThemeGuide)