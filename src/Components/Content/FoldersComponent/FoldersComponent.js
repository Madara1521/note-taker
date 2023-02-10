import React, { useState } from 'react'
import Bottom from '../Bottom/Bottom'
import { Box, Stack, Typography } from '@mui/material'
import { useStyles } from './FoldersStyled/FoldersStyled'
import SingleFolder from './SingleFolder'
import { useDispatch, useSelector } from 'react-redux'
import uuid from 'react-uuid'
import { addFolders } from '../../Redux/actions'

const FoldersComponent = (props) => {
  const classes = useStyles()

  const [titleText, setTitleText] = useState('')
  const folder = useSelector(state => {
    const { folderReducer } = state
    return folderReducer.folder
  })
  const dispatch = useDispatch()

  const handleInput = (e) => {
    console.log('')
    setTitleText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const id = uuid()
    dispatch(addFolders(titleText, id))
  }

  return (
    <Box
      flex={3}
      sx={{ display: { xs: 'none', sm: 'block' }, border: '1px solid #9e9e9e' }}
    >
      <Stack direction="column" alignItems="stretch" height="100%">
        <div className={classes.ICloud}>
          <Typography>
            ICloud
          </Typography>
          <form onSubmit={handleSubmit}>
            <input type="text" value={titleText} onChange={handleInput}/>
            <input type="submit" hidden/>
          </form>
        </div>
        <div className={classes.container}>
          <div className={classes.folders}>
            {!!folder.length && folder.map(res => {
              return <SingleFolder key={res.id} data={res}/>
            })}
          </div>
          <Bottom/>
        </div>
      </Stack>
    </Box>
  )
}

export default FoldersComponent