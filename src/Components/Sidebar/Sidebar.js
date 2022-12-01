import React from 'react'
import Bottom from '../Bottom/Bottom'
import { Box, List, Typography } from '@mui/material'

const Sidebar = () => {
  return (
    <Box
      flex={3}
      sx={{ display: { xs: 'none', sm: 'block' },backgroundColor:'skyblue', }}
    >
      <Box>
        <Typography>
          ICloud
        </Typography>
        <List>
          <Typography>All ICould</Typography>
          <Typography>Notes</Typography>
          <Typography>Imported Notes</Typography>
          <Typography>Recently Deleted</Typography>
        </List>
      </Box>
      <Bottom/>
    </Box>
  )
}



export default Sidebar