import React from 'react'
import styles from './Navbar.module.css'
import AllICloud from './All ICloud/AllICloud'
import Notes from './Notes/Notes'
import ImportedNotes from './Imported Notes/ImportedNotes'
import RecentlyDeleted from './Recently Deleted/RecentlyDeleted'

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div>
        ICloud
      </div>
      <div className={styles.navPad}>
        <AllICloud/>
        <Notes/>
        <ImportedNotes/>
        <RecentlyDeleted/>
      </div>
    </div>
  )
}

export default Navbar