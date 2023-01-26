import React, { useState } from 'react'
import Header from './Components/Header/Header'
import { Box, Stack } from '@mui/material'
import FoldersComponent from './Components/Content/FoldersComponent/FoldersComponent'
import Notes from './Components/Content/Notes/Notes'
import NoteDirectory from './Components/Content/NoteDirectory/NoteDirectory'
import uuid from 'react-uuid'

const App = () => {
  const [folders, setNotes] = useState([])

  const onAddFolder = () => {
    const newNote = {
      id: uuid(),
      title: 'Untitled folder'
    }
    setNotes([newNote,...folders])
  }



  return (
    <Box>
      <Header/>
      <Stack sx={{ minHeight: 'calc(100vh - 66px)' }} direction="row">
        <FoldersComponent folders={folders} onAddFolder={onAddFolder}/>
        <NoteDirectory/>
        <Notes/>
      </Stack>
    </Box>
  )
}

export default App
