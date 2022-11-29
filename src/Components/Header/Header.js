import React from 'react'
import { AppBar, Toolbar, Typography, styled, Box } from '@mui/material'
import LeftButtons from './Buttons/LeftButtons/LeftButtons'
import CenterButtons from './Buttons/CenterButtons/CenterButtons'
import RightButtons from './Buttons/RightButtons/RightButtons'
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined'

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  border: '1px solid grey',
  padding: '2px'
})

export const Search = styled(Box)(({ theme }) => ({
  backgroundColor: 'white',
  borderRadius: theme.shape.borderRadius,
  width: '90%',
}))

export const Icons = styled(Box)(({ theme }) => ({
  display: 'flex',
  backgroundColor: 'white',
  borderRadius: theme.shape.borderRadius,
  width: '50px',
  height: '30px',
  padding: '2px',
  justifyContent: 'center',
  border: '1px solid grey'
}))

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
        <Box flex={3}>
          <LeftButtons/>
        </Box>
        <Box flex={3}>
          <CenterButtons/>
        </Box>
        <Box flex={2}>
          <RightButtons/>
        </Box>
      </StyledToolbar>
    </AppBar>

  )
}

export default Header