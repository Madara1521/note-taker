import React from 'react'
import styles from './RightButtonsAndInput.module.css'
import { IconButton } from '@mui/material'
import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined'

const RightButtonsAndInput = () => {
  return (
    <div className={styles.rightBI}>
      <IconButton>
        <IosShareOutlinedIcon/>
      </IconButton>
      <input className={styles.inputSearch}/>
    </div>
  )
}

export default RightButtonsAndInput