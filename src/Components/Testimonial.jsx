import { Box, Card, CardContent, Divider, Typography } from '@mui/material'
import React from 'react'

const Testimonial = () => {
    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'column', backgroundColor: '#F1DEC9', }}>
                <Typography sx={{
                    textAlign: 'center',
                    pt: 5,
                    color: '#245953',
                    fontWeight: 'bold',
                    fontSize: {xs: '1.4rem',sm:'2rem'},
                    fontFamily: 'ubuntu'

                }}>Straight From Our Customer</Typography>
                <Box
                    sx={{
                        display: 'flex', justifyContent: 'space-around', alignItems: 'center', padding: 5,
                        flexDirection: { xs: 'column', md: 'row' },
                    }}
                >
                    <Card variant="outlined" sx={{
                        height: { xs: '37vh', lg: '35vh' },
                        width: { xs: '45vw', sm: '25vw', md: '15vw' },
                        marginBottom: 2
                    }}>
                        <CardContent>

                            <Typography variant="h5" component="div" >
                                Bella
                            </Typography>
                            <Typography sx={{ mb: 1, fontSize: { xs: '0.8rem', sm: '0.9rem' } }} color="text.secondary">
                                entrepreneur
                            </Typography>
                            <Divider/>
                            <Typography variant="body2">
                                This is my airline of choice, because of its topnotch service and value for money.
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card variant="outlined" sx={{
                        height: { xs: '37vh', lg: '35vh' },
                        width: { xs: '45vw', sm: '25vw', md: '15vw' },
                        marginBottom: 2
                    }}>
                        <CardContent>

                            <Typography variant="h5" component="div">
                                Sam
                            </Typography>
                            <Typography sx={{ mb: 1, fontSize: { xs: '0.8rem', sm: '0.9rem' } }} color="text.secondary">
                                Youtuber
                            </Typography>
                            <Divider/>
                            <Typography variant="body2">
                                Soar has unbeatable deals and flies to so many global destinations.  </Typography>
                        </CardContent>
                    </Card>
                    <Card variant="outlined" sx={{
                        height: { xs: '37vh', lg: '35vh' },
                        width: { xs: '45vw', sm: '25vw', md: '15vw' },
                    }}>
                        <CardContent>

                            <Typography variant="h5" component="div">
                                Harry
                            </Typography>
                            <Typography sx={{ mb: 1, fontSize: { xs: '0.8rem', sm: '0.9rem' } }} color="text.secondary">
                                Manager
                            </Typography>
                            <Divider/>
                            <Typography variant="body2">
                                With great staff pampering us passengers, flying becomes true luxury with Soar!      </Typography>
                        </CardContent>
                    </Card>
                </Box>
            </Box>
        </>
    )
}

export default Testimonial
