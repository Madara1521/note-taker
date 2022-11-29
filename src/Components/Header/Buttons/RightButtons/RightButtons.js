import React from 'react'
import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined'
import { Icons, Search } from '../../Header'
import { InputBase, Stack } from '@mui/material'

const RightButtons = () => {
  return (
    <Stack direction='row' spacing={1}>
      <Icons>
        <IosShareOutlinedIcon/>
      </Icons>
      <Search><InputBase placeholder='search'></InputBase></Search>
    </Stack>
  )
}

export default RightButtons