import React from 'react'

import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined'
import TextFieldsOutlinedIcon from '@mui/icons-material/TextFieldsOutlined'
import AutoAwesomeMotionOutlinedIcon from '@mui/icons-material/AutoAwesomeMotionOutlined'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import { Box, Stack } from '@mui/material'
import { Icons } from '../../StyledHeder/StyledAllHeader'

const CenterButtons = () => {
  return (
    <Box flex={3}>
      <Stack direction="row" spacing={1} >
        <Icons>
          <CheckCircleOutlineOutlinedIcon/>
        </Icons>
        <Icons>
          <TextFieldsOutlinedIcon/>
        </Icons>
        <Icons>
          <AutoAwesomeMotionOutlinedIcon/>
        </Icons>
        <Icons>
          <LockOutlinedIcon/>
        </Icons>
      </Stack>
    </Box>
  )
}

export default CenterButtons