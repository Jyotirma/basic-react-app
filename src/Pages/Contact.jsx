import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
    const navigate = useNavigate()

    const handleClick = () => {
      navigate("/content")
    }
  
  return (
    <form >
      <Box 
      display={'flex'} 
      flexDirection={'column'} 
      maxWidth={500} 
      alignItems={'center'} 
      justifyContent={'center'}
      margin='auto'
      marginTop={5}
      padding={5}
      borderRadius={5}
      boxShadow={'5px 5px 10px #ccc'}
      fontFamily={'Ubuntu'}
      sx={{
        ':hover': {
          boxShadow: '10px 10px 20px #ccc'
        }
      }}
      >
        <Typography variant='h3' marginBottom={3} >Contact Us!</Typography>
        <TextField id="outlined-basic" label="Name" variant="outlined" margin='normal'/>
        <TextField id="standard-multiline-static"
          label="Your Message"
          multiline
          rows={4}
          placeholder='Type your Concern here' />
        <Button variant="contained" 
        color="success" 
        sx={{marginTop: 3, borderRadius: 5}}
        onClick={handleClick}>Send</Button>
      </Box>
    </form>
  )
}

export default Contact
