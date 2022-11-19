import React from 'react'
import styles from './Content.module.css'
import Notes from '../Sidebar/Notes/Notes'
import NoteDirectory from './NoteDirectory/NoteDirectory'

const Content = () => {
  return (
    <div className={styles.content}>
      <NoteDirectory/>
      <Notes/>
    </div>
  )
}

export default Content