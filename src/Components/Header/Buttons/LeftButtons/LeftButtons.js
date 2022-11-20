import React from 'react'
import { IconButton } from '@mui/material'
import Crop32OutlinedIcon from '@mui/icons-material/Crop32Outlined'
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined'
import styles from './LeftButtons.module.css'


const LeftButtons = () => {
  return (
    <div className={styles.leftButtons}>
      <IconButton>
        <Crop32OutlinedIcon/>
      </IconButton>
      <IconButton>
        <GridViewOutlinedIcon/>
      </IconButton>
      <IconButton>
        <DeleteOutlineOutlinedIcon/>
      </IconButton>
      <IconButton>
        <BorderColorOutlinedIcon/>
      </IconButton>
    </div>
  )
}

export default LeftButtons