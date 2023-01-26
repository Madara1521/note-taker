import React from 'react'
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined'
import { Typography } from '@mui/material'
import { NewFolder } from './StyledBottom'



const Bottom = ({onAddFolder}) => {
  return (
    <NewFolder onClick={onAddFolder}>
      <AddCircleOutlinedIcon/>
      <Typography variant="h7">New Folder</Typography>
    </NewFolder>
  )
}

export default Bottom