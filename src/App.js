import React from 'react'
import styles from './App.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div className={styles.appWrapper}>
      <Header className={styles.header}/>
      <Navbar className={styles.navbar}/>
      <Footer className={styles.footer}/>
    </div>
  )
}

export default App
