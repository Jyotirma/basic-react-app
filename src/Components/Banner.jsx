import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'

const Banner = () => {
  return (
    <Box
      sx={{backgroundImage: "url(./banner8.jpg)", 
      width: '100%',
      height: 500,
      display: 'flex',
      flexDirection:'column',
      alignItems:'center',
      backgroundPosition: 'center center',
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed',

    }}
    >
        <Typography
            variant='h4'
            style={{
                fontWeight: "bold",
                fontFamily: 'ubuntu',
                color: '#19376D',
                marginTop: '10%',
                fontSize: {xs: '1.5rem',sm:'2rem'}
            }}
        >
            Soar for Less
        </Typography>
        <Typography
            variant='h5'
            style={{
                fontFamily: 'ubuntu',
                color: '#19376D',
                fontSize: '2rem'
            }}
        >
            50% Off On Regular Price
        </Typography>
        <Button variant='contained' sx={{marginTop: 10, borderRadius: 5, }}>BOOK A FLIGHT</Button>
    </Box>
  )
}

export default Banner
