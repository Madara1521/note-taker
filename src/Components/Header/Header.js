import React from 'react'
import { AppBar, Typography, Box } from '@mui/material'
import LeftButtons from './Buttons/LeftButtons/LeftButtons'
import CenterButtons from './Buttons/CenterButtons/CenterButtons'
import RightButtons from './Buttons/RightButtons/RightButtons'
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined'
import { StyledToolbar } from './StyledHeder/StyledAllHeader'

const Header = () => {
  return (
    <AppBar position="static" color="otherColor">
      <StyledToolbar>
        <Box flex={3}>
          <Typography variant="h6" sx={{ display: { xs: 'none', sm: 'block' } }}>
            Note
          </Typography>
          <FormatListBulletedOutlinedIcon sx={{ display: { xs: 'block', sm: 'none' } }}/>
        </Box>
        <LeftButtons/>
        <CenterButtons/>
        <RightButtons/>
      </StyledToolbar>
    </AppBar>

  )
}

export default Header