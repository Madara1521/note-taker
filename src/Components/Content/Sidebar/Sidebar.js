import React from 'react'
import Bottom from '../Bottom/Bottom'
import { Box, Stack, styled, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'space-between',
  }
}))

export const FileComponent = styled('div')(() => ({
  display: 'flex',
  padding: '5px'
}))

const Sidebar = () => {
  const classes = useStyles()


  return (
    <Box
      flex={3}
      sx={{ display: { xs: 'none', sm: 'block' }, border: '1px solid #9e9e9e' }}
    >
      <Stack direction="column" alignItems="stretch" height="100%">
        <Typography>
          ICloud
        </Typography>
        <div className={classes.container}>
          <div>
            <FileComponent>All ICould</FileComponent>
            <FileComponent>Notes</FileComponent>
            <FileComponent>Imported Notes</FileComponent>
            <FileComponent>Recently Deleted</FileComponent>
          </div>
          <Bottom/>
        </div>
      </Stack>
    </Box>
  )
}

export default Sidebar