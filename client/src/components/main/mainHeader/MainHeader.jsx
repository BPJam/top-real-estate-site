import React from 'react';
import { Box, Button, Card, CardContent, CardMedia, Typography } from '@mui/material';

function MainHeader({ load, isLoaded }) {
    return (
        <Box component={'section'} sx={{ height: '100vh', width: '100%' }}>
            <Card sx={{ border: 'none', boxShadow: 'none', backgroundColor: 'initial', height: '100%', width: '100%'  }}>
                <Box sx={{ zIndex: -2, backgroundColor: 'black', position: 'relative', height: '100%', width: '100%' }}>
                    <CardMedia
                        component='video'
                        image={'./cover-video.mp4'}
                        autoPlay
                        muted
                        loop
                        sx={{ position: 'absolute', zIndex: -1, height: '100%', width: '100%', objectFit: 'cover', opacity: 0.5 }}
                        onLoadedData={() => isLoaded()}
                    />
                </Box>

                <CardContent sx={{ zIndex: 1, display: 'flex', position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, justifyContent: 'center', alignItems: 'center'  }}>
                    {
                        load ?
                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', maxWidth: '60vw', marginTop: '7rem' }}>
                                <Typography component='h1' color={'whitesmoke'} sx={{ textAlign: 'center', fontSize: '4rem', fontWeight: '600', marginBottom: '2rem' }}>
                                    TOP Real Estate
                                </Typography>

                                <Typography component='p' color={'whitesmoke'} sx={{ textAlign: 'center', fontSize: '1.3rem', fontWeight: '400', marginBottom: '2rem' }}>
                                    Агентство преміум-класу в Києві, яке пишається своєю швидкістю
                                    та впевненістю в захисті інтересів наших клієнтів на ринку нерухомості
                                </Typography>

                                <Button
                                    variant='contained'
                                    sx={{
                                        backgroundColor: '#788d58',
                                        textTransform: 'none',
                                        boxShadow: 'initial',
                                        fontSize: '1.1rem',
                                        fontWeight: '500',
                                        height: '4rem',
                                        width: '11rem',
                                        borderRadius: '0.3rem',
                                        ':hover': {
                                            backgroundColor: '#788d58',
                                            WebkitBoxShadow: '0px 0px 0px 5px rgba(120,141,88,0.4)',
                                            MozBoxShadow: '0px 0px 0px 5px rgba(120,141,88,0.4)',
                                            boxShadow: '0px 0px 0px 5px rgba(120,141,88,0.4)',
                                            transition: 'all 0.3s ease-in-out',
                                            WebkitTransition: '0.3s all ease-in-out'
                                        }
                                    }}>
                                        - Зв'язатися -
                                    </Button>
                            </Box>
                        :
                            <Typography component="p">
                                Please wait, loading... 
                            </Typography>
                    }
                </CardContent>
            </Card>
        </Box>
    );
}

export default MainHeader;
