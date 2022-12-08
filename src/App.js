import React from 'react'
import Header from './Components/Header/Header'
import { Box, Stack } from '@mui/material'
import Sidebar from './Components/Content/Sidebar/Sidebar'
import Notes from './Components/Content/Notes/Notes'
import NoteDirectory from './Components/Content/NoteDirectory/NoteDirectory'

const App = () => {
  return (
    <Box>
      <Header/>
      <Stack sx={{ minHeight: 'calc(100vh - 66px)' }} direction="row">
        <Sidebar/>
        <NoteDirectory/>
        <Notes/>
      </Stack>
    </Box>
  )
}

export default App
