import React from 'react'
import { AppBar, Grid, Toolbar, Typography } from '@mui/material'
import LeftButtons from './Buttons/LeftButtons/LeftButtons'
import CenterButtons from './Buttons/CenterButtons/CenterButtons'
import RightButtons from './Buttons/RightButtons/RightButtons'

const Header = () => {

  return (
    <AppBar position="static">
      <Toolbar sx={{border: '1px solid grey'}}>
        <Grid container columns={12} >

          <Grid item xs={3}>
            <Typography variant="h6" component="span">
              Note
            </Typography>
          </Grid>

          <Grid item xs={3}>
            <LeftButtons/>
          </Grid>
          <Grid item xs={3}>
            <CenterButtons/>
          </Grid>

          <Grid item xs={3}>
            <RightButtons/>
          </Grid>

        </Grid>
      </Toolbar>
    </AppBar>

  )
}

export default Header