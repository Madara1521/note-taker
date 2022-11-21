import React from 'react'
import styles from './Sidebar.module.css'
import AllICloud from './All ICloud/AllICloud'
import ImportedNotes from './Imported Notes/ImportedNotes'
import RecentlyDeleted from './Recently Deleted/RecentlyDeleted'
import Notecomp from './Notecomp/Notecomp'
import Bottom from '../Bottom/Bottom'

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div>
        ICloud
      </div>
      <div className={styles.navPad}>
        <AllICloud/>
        <Notecomp/>
        <ImportedNotes/>
        <RecentlyDeleted/>
      </div>
      <Bottom className={styles.newFolder}/>
    </div>
  )
}

export default Sidebar