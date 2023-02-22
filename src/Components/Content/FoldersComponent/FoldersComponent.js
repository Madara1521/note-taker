import React, { useState } from 'react'
import Bottom from '../Bottom/Bottom'
import { Box, Stack, Typography } from '@mui/material'
import { useStyles } from './FoldersStyled/FoldersStyled'
import SingleFolder from './SingleFolder'
import { connect, useSelector } from 'react-redux'
import uuid from 'react-uuid'
import { addFolders } from '../../Redux/actions'

const FoldersComponent = ({ addFolders }) => {
  const classes = useStyles()

  const [titleFolderText] = useState('Untitled folder')
  const folder = useSelector(state => {
    const { folderReducer } = state
    return folderReducer.folder
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const id = uuid()
    addFolders(titleFolderText, id)
  }

console.log('folders >>>', folder)

  return (
    <Box
      flex={3}
      sx={{ display: { xs: 'none', sm: 'block' }, border: '1px solid #9e9e9e' }}
    >
      <Stack direction="column" alignItems="stretch" height="100%">
        <div className={classes.iCloud}>
          <Typography>
            ICloud
          </Typography>
        </div>
        <div className={classes.container}>
          <div className={classes.folders}>
            {!!folder.length && folder.map(res => {
              return <SingleFolder key={res.id} data={res} />
            })}
          </div>
          <div onClick={handleSubmit}>
          <Bottom/>
          </div>
        </div>
      </Stack>
    </Box>
  )
}

export default connect(null,{addFolders})(FoldersComponent)