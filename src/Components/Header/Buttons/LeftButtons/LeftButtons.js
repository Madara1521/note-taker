import React from 'react'
import Crop32OutlinedIcon from '@mui/icons-material/Crop32Outlined'
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined'
import { Box, Stack } from '@mui/material'
import { Icons } from '../../StyledHeder/StyledAllHeader'

const LeftButtons = () => {
  return (
    <Box flex={3}>
      <Stack direction="row" spacing={1}>
        <Icons>
          <Crop32OutlinedIcon/>
        </Icons>
        <Icons>
          <GridViewOutlinedIcon/>
        </Icons>
        <Icons>
          <DeleteOutlineOutlinedIcon/>
        </Icons>
        <Icons>
          <BorderColorOutlinedIcon/>
        </Icons>
      </Stack>
    </Box>
  )
}

export default LeftButtons