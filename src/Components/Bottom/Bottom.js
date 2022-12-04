import React from 'react'
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined'
import { Button, styled, Typography } from '@mui/material'

export const NewFolder = styled(Button)({
  color: 'grey',
  width: '100%',
  display: 'flex',
  justifyContent: 'start',
  borderRadius: '0',
})

const Bottom = () => {
  return (
    <NewFolder>
      <AddCircleOutlinedIcon/>
      <Typography variant="h7">New Folder</Typography>
    </NewFolder>
  )
}

export default Bottom