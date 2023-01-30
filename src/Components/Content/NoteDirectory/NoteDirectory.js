import React from 'react'
import { Box } from '@mui/material'
import { useStylesDirectory } from './NoteDirectoryStyled/NoteDirectoryStyled'
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined'

const NoteDirectory = ({ notes, onDeleteNotes }) => {
  const styleDirectory = useStylesDirectory()

  return (
    <Box flex={3} sx={{ border: '1px solid #9e9e9e' }}>
      <div className={styleDirectory.files}>
        {notes.map((note) => (
          <div className={styleDirectory.fileComponent}>
            <div className={styleDirectory.titleAndDelete}>
              {note.title}
              <HighlightOffOutlinedIcon onClick={() => onDeleteNotes(note.id)}/>
            </div>
            <p>{note.body && note.body.substr(0, 100) + '...'}</p>
            <small>Last modified {new Date(note.lastModified).toLocaleDateString('en-GB', {
              hour: '2-digit',
              minute: '2-digit',
            })}</small>

          </div>
        ))}
      </div>
    </Box>
  )
}

export default NoteDirectory