import React from 'react'
import { Box } from '@mui/material'

const Notes = () => {
  return (
    <Box flex={4} sx={{border:'1px solid #9e9e9e'}}>
      <div>
        Data and time
      </div>
      <div>
        Notes
      </div>
    </Box>
  )
}

export default Notes