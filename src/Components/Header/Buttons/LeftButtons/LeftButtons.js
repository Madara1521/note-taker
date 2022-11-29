import React from 'react'
import Crop32OutlinedIcon from '@mui/icons-material/Crop32Outlined'
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined'
import { Icons } from '../../Header'
import { Stack } from '@mui/material'

const LeftButtons = () => {
  return (
    <Stack direction='row' spacing={1}>
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
  )
}

export default LeftButtons