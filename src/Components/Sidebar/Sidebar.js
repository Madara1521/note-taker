import React from 'react'
import styles from './Sidebar.module.css'
import AllICloud from './All ICloud/AllICloud'
import Notes from './Notes/Notes'
import ImportedNotes from './Imported Notes/ImportedNotes'
import RecentlyDeleted from './Recently Deleted/RecentlyDeleted'

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
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

export default Sidebar