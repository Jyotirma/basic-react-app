import { Box, Typography } from '@mui/material'
import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
const Footer = () => {
  return (
    <>
      <Box sx={{textAlign: 'center',
       backgroundColor: '#245953', color:'#D8D8D8',
       }}>
        <Box>
            <InstagramIcon/>
            <TwitterIcon/>
            <FacebookIcon/>
            <GitHubIcon/>
        </Box>
       
        <Typography variant='h6'>
            All Rights reserved @ SoarAirlines
        </Typography>
      </Box>
    </>
  )
}

export default Footer
