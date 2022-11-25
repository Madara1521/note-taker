import React from 'react'
import NoteDirectory from './NoteDirectory/NoteDirectory'
import Notes from './Notes/Notes'
import { Grid } from '@mui/material'

const Content = () => {
  return (
    <Grid container columns={9}>
      <Grid item xs={4}>
        <NoteDirectory/>
      </Grid>
      <Grid item xs={5}>
        <Notes/>
      </Grid>
    </Grid>
  )
}

export default Content