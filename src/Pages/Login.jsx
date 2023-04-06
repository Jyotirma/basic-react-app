import { Button, TextField, Box, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/content")
  }

  return (<Box sx={{
      height: '100vh',
      backgroundImage: 'url(./banner8.jpg)',
      backgroundPosition: 'center center',
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed',
      marginTop: 0,
      display: 'flex',
      flexDirection: 'column',
      justifyContent:'center',
      alignItems:'center'
   }}>
    <form >
      <Box 
      display={'flex'} 
      flexDirection={'column'} 
      maxWidth={500} 
      alignItems={'center'} 
      justifyContent={'center'}
      
      marginTop= {1}
      padding={6}
      borderRadius={5}
      boxShadow={'5px 5px 10px #ccc'}
      fontFamily={'Ubuntu'}
      sx={{
        ':hover': {
          boxShadow: '10px 10px 20px #ccc'
        }
      }}
      >
        <Typography variant='h3' marginBottom={3} >LogIn</Typography>
        <TextField id="outlined-basic" label="Name" variant="outlined" margin='normal'/>
        <TextField type='password' id="outlined-basic" label="Password" variant="outlined" />
        <Button variant="contained" 
        color="success" 
        sx={{marginTop: 3, borderRadius: 5}}
        onClick={handleClick}>Submit</Button>
      </Box>
    </form>
    </Box>
  )
}

export default Login
