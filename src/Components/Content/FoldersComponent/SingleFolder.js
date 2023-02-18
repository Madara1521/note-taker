import React from 'react'
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined'
import { useStyles } from './FoldersStyled/FoldersStyled'
import { useState, useEffect } from 'react'
import { titleUpdate, deleteFolders } from '../../Redux/actions'
import { useDispatch } from 'react-redux'

const SingleFolder = ({ data }) => {
  const classes = useStyles()
  const [titleText, setTitleText] = useState('')
  const { title, id } = data
  const dispatch = useDispatch()

  useEffect(() => {
    if (title) {
      setTitleText(title)
    }
  }, [title])

  const handleInput = (e) => {
    setTitleText(e.target.value)
  }

  const handleUpdate = (e) => {
    e.preventDefault()
    dispatch(titleUpdate(titleText, id))
  }

  const handleDelete = (e) => {
    e.preventDefault()
    dispatch(deleteFolders(id))
  }


  return (
    <form onSubmit={handleUpdate} className={classes.foldersComponent}>
      <input className={classes.inputs} type="text" value={titleText} onChange={handleInput}/>
      <input type="submit" hidden/>
      <HighlightOffOutlinedIcon onClick={handleDelete}/>
    </form>
  )
}

export default SingleFolder