import React from 'react'
import styles from './Header.module.css'
import LeftButtons from './Buttons/LeftButtons/LeftButtons'
import CentralButtons from './Buttons/CentralButtons/CentralButtons'
import RightButtonsAndInput from './Buttons/RightButtonsAndInput/RightButtonsAndInput'
import HeaderIcons from './Buttons/HeaderIcons/HeaderIcons'


const Header = () => {
  return (
    <div className={styles.header}>
      <HeaderIcons/>
      <LeftButtons/>
      <CentralButtons/>
      <RightButtonsAndInput/>
    </div>
  )
}

export default Header