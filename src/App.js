import React, { useState } from 'react'
import Header from './Components/Header/Header'
import { Box, Stack } from '@mui/material'
import FoldersComponent from './Components/Content/FoldersComponent/FoldersComponent'
import Notes from './Components/Content/Notes/Notes'
import NoteDirectory from './Components/Content/NoteDirectory/NoteDirectory'
import uuid from 'react-uuid'

const App = () => {
  const [folders, setFolders] = useState([])

  const onAddFolder = () => {
    const newFolder = {
      id: uuid(),
      title: 'Untitled folder'
    }
    setFolders([newFolder, ...folders])
  }

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

  return (
    <Box>
      <Header onAddNotes={onAddNotes} />
      <Stack sx={{ minHeight: 'calc(100vh - 66px)' }} direction="row">
        <FoldersComponent folders={folders} onAddFolder={onAddFolder}/>
        <NoteDirectory notes={notes}/>
        <Notes/>
      </Stack>
    </Box>
  )
}

export default App
