import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Primary from './Primary'
import Secondary from './Secondary'
import Error from './Error'
import Text from './Text'
import Divider from './Divider'
import Background from './Background'

export const Palette = ({ classes, theme }) => {
  return (
    <div>
      <Primary />
      <Secondary />
      <Error />
      <Text />
      <Divider />
      <Background />
    </div>
  )
}

const styles = theme => ({})

export default withStyles(styles, { withTheme: true })(Palette)