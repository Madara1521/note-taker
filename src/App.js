import React from 'react'
import Header from './Components/Header/Header'
import { Grid } from '@mui/material'
import Sidebar from './Components/Sidebar/Sidebar'
import Content from './Components/Content/Content'

const App = () => {
  return (
    <div>
      <Header/>
      <Grid container columns={12} sx={{border: '1px solid gray'}} >
        <Grid item xs={3} sx={{border: '1px solid grey'}}>
          <Sidebar/>
        </Grid>
        <Grid xs={9}>
          <Content/>
        </Grid>
      </Grid>
    </div>
  )
}

export default App
