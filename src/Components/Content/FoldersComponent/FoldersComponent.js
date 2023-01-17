import React from 'react'
import Bottom from '../Bottom/Bottom'
import { Box, Stack, Typography } from '@mui/material'
import { useStyles } from './FoldersStyled/FoldersStyled'
import { connect } from 'react-redux'
import { setTitle } from '../../Redux/store'


const FoldersComponent = () => {
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
          <div className={classes.folders}>
            <div className={classes.fileComponent}>All ICould</div>
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