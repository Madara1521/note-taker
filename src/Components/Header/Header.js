import React from 'react'
import { Typography, Box } from '@mui/material'
import LeftButtons from './Buttons/LeftButtons/LeftButtons'
import CenterButtons from './Buttons/CenterButtons/CenterButtons'
import RightButtons from './Buttons/RightButtons/RightButtons'
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined'
import { AppBarComponent, StyledToolbar } from './StyledHeder/StyledAllHeader'



const Header = ({ onAddNotes, onDelete }) => {
  return (
    <AppBarComponent>
      <StyledToolbar>
        <Box flex={3}>
          <Typography variant="h6" sx={{ display: { xs: 'none', sm: 'block' } }}>
            Note
          </Typography>
          <FormatListBulletedOutlinedIcon sx={{ display: { xs: 'block', sm: 'none' } }}/>
        </Box>
        <LeftButtons onAddNotes={onAddNotes} onDelete={onDelete} />
        <CenterButtons/>
        <RightButtons/>
      </StyledToolbar>
    </AppBarComponent>

  )
}

export default Header