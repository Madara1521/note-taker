import React from 'react'
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined'
import { useStyles } from './FoldersStyled/FoldersStyled'
import { useState, useEffect } from 'react'
import { titleUpdate, deleteFolders } from '../../Redux/actions'
import { connect } from 'react-redux'

const SingleFolder = ({ data, titleUpdate, deleteFolders }) => {
  const classes = useStyles()
  const [titleText, setTitleText] = useState('')
  const { title, id } = data

  useEffect(() => {
    if (title) {
      setTitleText(title)
    }
  }, [title])

  const handleInput = (e) => {
    setTitleText(e.target.value)
    titleUpdate(e.target.value, id)
  }

  const handleDelete = (e) => {
    e.preventDefault()
    deleteFolders(id)
  }

  return (
    <div className={classes.foldersComponent}>
      <input className={classes.inputs} type="text" value={titleText} onChange={handleInput}/>
      <HighlightOffOutlinedIcon onClick={handleDelete}/>
    </div>
  )
}

export default connect(null, {titleUpdate,deleteFolders})(SingleFolder)