import React, { useState } from 'react'
import Bottom from '../Bottom/Bottom'
import { Box, Stack, Typography } from '@mui/material'
import { useStyles } from './FoldersStyled/FoldersStyled'
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined'
import uuid from 'react-uuid'
import { connect } from 'react-redux'


const FoldersComponent = (props) => {
  const classes = useStyles()

  const [folders, setFolders] = useState([])
  const onAddFolder = () => {
    const newFolder = {
      id: uuid()
    }
    setFolders([newFolder, ...folders])
  }

  const onDeleteFolders = (idToDelete) => {
    setFolders(folders.filter((folder) => folder.id !== idToDelete))
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
            {folders.map((folder) => (
              <div className={classes.foldersComponent}>
                {props.title}
                <HighlightOffOutlinedIcon onClick={() => onDeleteFolders(folder.id)}/>
              </div>
            ))}
          </div>
          <Bottom onAddFolder={onAddFolder}/>
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

const mapDispatchToProps =(dispatch) => {
  return {
    addFolders: () => {
      console.log('click')
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(FoldersComponent)