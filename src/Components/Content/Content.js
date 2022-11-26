import React from 'react'
import NoteDirectory from './NoteDirectory/NoteDirectory'
import Notes from './Notes/Notes'
import { Grid } from '@mui/material'

const Content = () => {
  return (
    <Grid container columns={9}>
      <Grid item xs={4} sx={{border: '1px solid grey'}}>
        <NoteDirectory/>
      </Grid>
      <Grid item xs={5} sx={{border: '1px solid grey'}}>
        <Notes/>
      </Grid>
    </Grid>
  )
}

export default Content