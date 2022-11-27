import React from 'react'
import Bottom from '../Bottom/Bottom'
import { Box, Typography } from '@mui/material'

const Sidebar = () => {
  return (
    <Box
      flex={3}
      p={2}
      sx={{ display: { xs: 'none', sm: 'block' } }}
    >
      <Box>
        <Typography>
          ICloud
        </Typography>
        <Box>
          <Typography>All ICould</Typography>
          <Typography>Notes</Typography>
          <Typography>Imported Notes</Typography>
          <Typography>Recently Deleted</Typography>
        </Box>
      </Box>
      <Bottom/>
    </Box>
  )
}

export default Sidebar