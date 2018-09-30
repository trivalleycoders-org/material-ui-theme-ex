import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

function MainAppBar(props) {
  const { buttonClick, classes } = props
  console.log('props', props)
  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit" className={classes.flex}>
            Material UI Theme
          </Typography>
          <Button
            name='purpleGreen'
            color="inherit"
            onClick={buttonClick}
          >
            purple / green
          </Button>
          <Button
            name='blueTeal'
            color="inherit"
            onClick={buttonClick}
          >
            blue / teal
          </Button>
          <Button
            name='dflt'
            color="inherit"
            onClick={buttonClick}
          >
            Default
          </Button>
          <a href='https://github.com/trivalleycoders-org/material-ui-theme-ex/blob/master/md/jss.md'>
            <Button
              color='secondary'
              variant='raised'
            >
              Documentation
            </Button>
          </a>

        </Toolbar>
      </AppBar>
    </div>
  )
}

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
}

export default withStyles(styles)(MainAppBar)