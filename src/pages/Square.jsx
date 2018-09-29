import React from 'react'
import { Typography } from '@material-ui/core'

const Square = ({ bgColor, children }) => {
  const style = {
    width: 100,
    height: 100,
    backgroundColor: bgColor,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5
  }
  return (
    <div style={style}>
      <Typography variant='body1'>
        {children}
      </Typography>
    </div>
  )
}

export default Square