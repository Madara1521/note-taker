import React from 'react'
import Header from './Components/Header/Header'
import { Stack } from '@mui/material'
import Sidebar from './Components/Sidebar/Sidebar'
import Notes from './Components/Content/Notes/Notes'
import NoteDirectory from './Components/Content/NoteDirectory/NoteDirectory'

const App = () => {
  return (
    <div>
      <Header/>
      <Stack direction="row">
        <Sidebar/>
        <NoteDirectory/>
        <Notes/>
      </Stack>
    </div>
  )
}

export default App
