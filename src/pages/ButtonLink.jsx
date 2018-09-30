import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const ButtonLink = ({classes, children, color, to, variant}) => {
  const LinkComponent = props => <Link
      to={to}
      {...props}
    />
  return (
    <Button
      component={LinkComponent}
      className={classes.root}
      variant={variant}
      color={color}
    >
      {children}
    </Button>
  )
}

const styles = theme => ({
  root: {
    color: theme.palette.primary.contrastText,
  },
})

export default withStyles(styles)(ButtonLink)