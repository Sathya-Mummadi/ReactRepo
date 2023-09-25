import React from 'react'

// import {Typography, AppBar, Toolbar} from '@material-ui/core'
import { AppBar, Button, Container, TextField, Toolbar, Typography } from '@mui/material';


 const App = () => {
  return (
    <>
       <Container>
      <AppBar>
        <Toolbar>
        <Typography>material UI application</Typography>
      </Toolbar>
      </AppBar>
      </Container>
      <center>
      <Container style={{"margin":"70px", "textAlign":"center"}}> 
      <Typography variant='h4'>Material UI</Typography><br/>
        <form>
      <TextField style={{"width":"400px", "margin":"3px"}} type='text' label="UserName" variant='outlined'/> <br/>
      <TextField style={{"width":"400px", "margin":"3px"}} type='text' label="Password" variant='outlined'/> <br/>
      <Button variant="outlined">Primary</Button>
      </form>
      </Container>
      </center>
      </>
  )
}
  
export default App