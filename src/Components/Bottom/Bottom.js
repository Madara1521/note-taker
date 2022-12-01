import React from 'react'
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined'
import { Box, Button, Typography } from '@mui/material'

const Bottom = () => {
  return (
    <Box>
      <Button sx={{borderRadius: '0px', width: '100%', justifyContent: 'start'}}>
        <AddCircleOutlinedIcon/>
        <Typography>New Folder</Typography>
      </Button>
    </Box>
  )
}

export default Bottom