import React from 'react'
import { IconButton, TextField } from '@mui/material'
import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined'


const RightButtons = () => {
  return (
    <div>
      <IconButton>
        <IosShareOutlinedIcon/>
      </IconButton>
      <TextField label="serach"/>
    </div>
  )
}

export default RightButtons