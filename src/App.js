import React from 'react'
import Header from './Components/Header/Header'
import { Box, Stack } from '@mui/material'
import Sidebar from './Components/Sidebar/Sidebar'
import Notes from './Components/Content/Notes/Notes'
import NoteDirectory from './Components/Content/NoteDirectory/NoteDirectory'

const App = () => {
  return (
    <div>
      <Header/>
      <Stack direction="row">
        <Sidebar/>
        <Box flex={3}>
          <NoteDirectory/>
        </Box>
        <Box flex={4}>
          <Notes/>
        </Box>
      </Stack>
    </div>
  )
}

export default App
