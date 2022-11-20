import React from 'react'
import styles from './RightButtonsAndInput.module.css'
import { IconButton, TextField } from '@mui/material'
import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined'

const RightButtonsAndInput = () => {
  return (
    <div className={styles.rightBI}>
      <IconButton>
        <IosShareOutlinedIcon/>
      </IconButton>
      <TextField fullWidth label="search" id="fullWidth" className={styles.inputSearch}/>
    </div>
  )
}

export default RightButtonsAndInput