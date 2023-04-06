import { Box, Typography } from '@mui/material'
import React from 'react'

const Cards = ({image}) => {
  return (
    <Box
        sx={{backgroundImage:`url(./${image}.jpg)`,
            height: '50vh',
            width: {xs: '70vw',sm:'60vw', md:'50vw'},
            margin: 5,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
              }}
    >
    </Box>
  )
}

export default Cards
