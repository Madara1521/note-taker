import React from 'react'
import Bottom from '../Bottom/Bottom'
import { Box, Stack, Typography } from '@mui/material'
import { FileComponent, useStyles } from './FoldersStyled/FoldersStyled'
import { connect } from 'react-redux'
import { setTitle } from '../../Redux/store'

const FoldersComponent = () => {
  const classes = useStyles()
  const foldersClick = () => {
    console.log('hello')
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
          <div>
            <FileComponent onClick={foldersClick}>All ICould</FileComponent>
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

const mapStateToProps = (state) => {
  return {
    title: state.title
  }
}

export default connect(mapStateToProps, { setTitle })(FoldersComponent)