import React from 'react'
import styles from './App.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Components/Header/Header'
import Sidebar from './Components/Sidebar/Sidebar'
import Content from './Components/Content/Content'
import Bottom from './Components/Bottom/Bottom'

const App = () => {
  return (
    <div className={styles.appWrapper}>
      <Header/>
      <Sidebar/>
      <Content/>
      <Bottom/>
    </div>
  )
}

export default App
