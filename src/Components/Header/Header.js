import React from 'react'
import { AppBar, Typography, Box, styled } from '@mui/material'
import LeftButtons from './Buttons/LeftButtons/LeftButtons'
import CenterButtons from './Buttons/CenterButtons/CenterButtons'
import RightButtons from './Buttons/RightButtons/RightButtons'
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined'
import { StyledToolbar } from './StyledHeder/StyledAllHeader'

export const AppBarComponent = styled(AppBar)({
  position:'static',
  color:'black',
  background: 'linear-gradient(0deg, rgba(190,190,190,1) 0%, rgba(214,214,214,1) 11%, rgba(242,241,241,1) 58%)'
})

const Header = () => {
  return (
    <AppBarComponent>
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
    </AppBarComponent>

  )
}

export default Header