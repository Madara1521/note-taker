import React from 'react'
import Bottom from '../Bottom/Bottom'
import { Typography } from '@mui/material'


const Sidebar = () => {
  return (
    <div>
      <div>
        <Typography>
          ICloud
        </Typography>
        <div>
          <Typography>All ICould</Typography>
          <Typography>Notes</Typography>
          <Typography>Imported Notes</Typography>
          <Typography>Recently Deleted</Typography>
        </div>
      </div>
      <Bottom/>
    </div>
  )
}

export default Sidebar