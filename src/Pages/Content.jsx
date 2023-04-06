import React, { useState } from 'react'
import { AppBar, Box, Drawer, IconButton, Tab, Tabs, Toolbar, Typography, List, ListItem, ListItemButton, ListItemText, Divider, Button } from '@mui/material'
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff'; import MenuIcon from '@mui/icons-material/Menu';
import Banner from '../Components/Banner';
import Footer from '../Components/Footer';
import Cards from '../Components/Cards';
import Testimonial from '../Components/Testimonial';
import { Link } from 'react-router-dom';


const Content = () => {

  const [open, setOpen] = useState(false)

    const drawerToggle = () => {
      setOpen(!open)
    }
  
    const drawer = (
      <Box onClick={drawerToggle} sx={{ textAlign: 'center' }} >
        <Typography variant='h6'>
        <FlightTakeoffIcon />
              Soar Airlines</Typography>
              <Divider/>
              <div style={{display: 'flex', flexDirection: 'column', marginTop:8, paddingTop: 8}}>
              <Button href="/content" variant="text" color='inherit' >Home</Button>
              <Button href="/contact" variant="text" color='inherit' >Contact</Button>
              <Button href="/" variant="text" color='inherit' >LogOut</Button>
              </div>
      </Box>
    )


  return (
    <>
      <Box>
        <AppBar elevation={0}
        component={'nav'}
          sx={{ background: '#245953', color: '#D8D8D8' }}>
          <Toolbar>
            <IconButton
              color='inherit'
              aria-label='open drawer'
              edge="start"
              sx={{
                mr: 2,
                display: { sm: 'none' }
              }}
              onClick={drawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant='h5' ml={5} sx={{flexGrow: 1}}>
              <FlightTakeoffIcon />
              Soar Airlines</Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <Button href="/content" variant="text" color='inherit' >Home</Button>
              <Button href="/contact" variant="text" color='inherit' >Contact</Button>
              <Button href="/" variant="text" color='inherit' >LogOut</Button>
            </Box >
          </Toolbar>
        </AppBar>
        <Box>
          <Drawer variant='temporary'
            open={open}
            onClose={drawerToggle}
            sx={{
              display: { xs: 'block', sm: 'none' },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "200px"
              }
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Toolbar />
      </Box>
        <Banner />
      <Box bgcolor='#F9F5EB'
        sx={{
          display: 'flex', justifyContent: 'center',
          flexDirection: 'column',
          padding: 5
        }}
      >
        <Typography sx={{
          textAlign: 'center',
          pt: 5,
          color: '#245953',
          fontWeight: 'bold',
          fontSize: '2rem',
          fontFamily: 'ubuntu'

        }}>Top Destination</Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md:'row'},
            justifyContent: 'center',
            alignItems: 'center'
          }}>
          <Cards image={'paris'} />
          <Cards image={'taj'} />
          <Cards image={'hollywood'} />
        </Box>

        <Button variant='contained'
          sx={{ borderRadius: 5,  margin: 'auto' }}
        >BOOK A FLIGHT</Button>
      </Box>
      <Testimonial/>
        <Footer />
      
    </>
  )
}

export default Content
