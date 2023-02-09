import React, { useState } from 'react'
import Header from './Components/Header/Header'
import { Box, Stack } from '@mui/material'
import FoldersComponent from './Components/Content/FoldersComponent/FoldersComponent'
import Notes from './Components/Content/Notes/Notes'
import NoteDirectory from './Components/Content/NoteDirectory/NoteDirectory'
import uuid from 'react-uuid'

const App = () => {

  const [notes, setNotes] = useState([])
  const onAddNotes = () => {
    const newNote = {
      id: uuid(),
      title: 'Untitled note',
      body: '',
      lastModified: Date.now()
    }
    setNotes([newNote, ...notes])
  }

  const onDeleteNotes = (idToDelete) => {
    setNotes(notes.filter((note) => note.id !== idToDelete))
  }

  return (
    <Box>
      <Header onAddNotes={onAddNotes}/>
      <Stack sx={{ minHeight: 'calc(100vh - 66px)' }} direction="row">
        <FoldersComponent/>
        <NoteDirectory notes={notes} onDeleteNotes={onDeleteNotes}/>
        <Notes/>
      </Stack>
    </Box>
  )
}

export default App
