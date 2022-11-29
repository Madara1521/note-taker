import React from 'react'
import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined'
import { Box, InputBase, Stack } from '@mui/material'
import { Icons, Search } from '../../StyledHeder/StyledAllHeader'

const RightButtons = () => {
  return (
    <Box flex={2}>
      <Stack direction="row" spacing={1}>
        <Icons>
          <IosShareOutlinedIcon/>
        </Icons>
        <Search>
          <InputBase placeholder="search"/>
        </Search>
      </Stack>
    </Box>
  )
}

export default RightButtons