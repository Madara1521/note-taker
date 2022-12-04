import React from 'react'
import Bottom from '../Bottom/Bottom'
import { Box, List, Stack, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'space-between'
  }
}))

const Sidebar = () => {
  const classes = useStyles()

  return (
    <Box
      flex={3}
      sx={{ display: { xs: 'none', sm: 'block' } }}
    >
      <Stack direction='column' alignItems='stretch' height="100%">
        <Typography>
          ICloud
        </Typography>
        <div className={classes.container}>
          <List>
            <Typography>All ICould</Typography>
            <Typography>Notes</Typography>
            <Typography>Imported Notes</Typography>
            <Typography>Recently Deleted</Typography>
          </List>
          <Bottom/>
        </div>
      </Stack>
    </Box>
  )
}

export default Sidebar