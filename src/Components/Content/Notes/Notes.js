import React from 'react'
import { Box } from '@mui/material'
import { useStylesNotes } from './NotesStyled'

const Notes = () => {
  const styledNotes = useStylesNotes()

  return (
    <Box flex={4} sx={{ border: '1px solid #9e9e9e' }}>
      <div>
        Data and time
      </div>
      <textarea className={styledNotes.noteEdit} id="body" placeholder="Write your note here..."></textarea>
    </Box>
  )
}

export default Notes