import React from 'react'
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined'
import { useStyles } from './FoldersStyled/FoldersStyled'


const SingleFolder = () => {
  const classes = useStyles()

  return (
    <div className={classes.foldersComponent}>
      <input className={classes.inputs} type='text'/>
      <input type='submit' hidden/>
      <HighlightOffOutlinedIcon/>
    </div>
  )
}

export default SingleFolder