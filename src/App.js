import React from 'react'
import Header from './Components/Header/Header'
import { Box, Stack } from '@mui/material'
import FoldersComponent from './Components/Content/FoldersComponent/FoldersComponent'
import Notes from './Components/Content/Notes/Notes'
import NoteDirectory from './Components/Content/NoteDirectory/NoteDirectory'

const App = () => {
  return (
    <Box>
      <Header/>
      <Stack sx={{ minHeight: 'calc(100vh - 66px)' }} direction="row">
        <FoldersComponent/>
        <NoteDirectory/>
        <Notes/>
      </Stack>
    </Box>
  )
}

export default App
