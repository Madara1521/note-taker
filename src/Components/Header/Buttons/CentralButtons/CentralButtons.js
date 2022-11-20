import React from 'react'
import { IconButton } from '@mui/material'
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined'
import TextFieldsOutlinedIcon from '@mui/icons-material/TextFieldsOutlined'
import AutoAwesomeMotionOutlinedIcon from '@mui/icons-material/AutoAwesomeMotionOutlined'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import styles from './CentralButtons.module.css'


const LeftButtons = () => {
  return (
    <div className={styles.centralButtons}>
      <IconButton>
        <CheckCircleOutlineOutlinedIcon/>
      </IconButton>
      <IconButton>
        <TextFieldsOutlinedIcon/>
      </IconButton>
      <IconButton>
        <AutoAwesomeMotionOutlinedIcon/>
      </IconButton>
      <IconButton>
        <LockOutlinedIcon/>
      </IconButton>
    </div>
  )
}

export default LeftButtons