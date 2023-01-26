import React from 'react'
import { Box } from '@mui/material'
import { useStylesDirectory } from './NoteDirectoryStyled/NoteDirectoryStyled'

const NoteDirectory = () => {
  const styleDirectory = useStylesDirectory()

  return (
    <Box flex={3} sx={{border:'1px solid #9e9e9e'}} >
      <div className={styleDirectory.files}>
        <div className={styleDirectory.fileComponent}>
          Title
        </div>
      </div>
    </Box>
  )
}

export default NoteDirectory