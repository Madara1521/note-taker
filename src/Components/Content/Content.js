import React from 'react'
import styles from './Content.module.css'
import NoteDirectory from './NoteDirectory/NoteDirectory'
import Notes from './Notes/Notes'

const Content = () => {
  return (
    <div className={styles.content}>
      <NoteDirectory/>
      <Notes/>
    </div>
  )
}

export default Content