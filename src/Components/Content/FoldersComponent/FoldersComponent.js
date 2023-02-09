import React from 'react'
import Bottom from '../Bottom/Bottom'
import { Box, Stack, Typography } from '@mui/material'
import { useStyles } from './FoldersStyled/FoldersStyled'
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined'
import { useSelector, useDispatch } from 'react-redux'

import {inputTitleFolder} from '../../Redux/actions'

const FoldersComponent = (props) => {
  const classes = useStyles()
  const title = useSelector(state => {
    const {folderReducer} = state
    return folderReducer.title
  })
  const dispatch = useDispatch()

  const handleChange = (e) => {
    dispatch(inputTitleFolder(e.target.value))
  }


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
          <div className={classes.folders}>
            <div>
            <input type='title' onChange={handleChange}/>
            </div>
            {title}
            <HighlightOffOutlinedIcon/>
          </div>
          <Bottom />
        </div>
      </Stack>
    </Box>
  )
}



export default (FoldersComponent)