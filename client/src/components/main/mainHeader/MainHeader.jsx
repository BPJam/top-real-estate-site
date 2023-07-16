import React, { useState } from 'react';
import { Box, Button, Card, CardContent, CardMedia, Link, List, ListItem, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Modal, Typography } from '@mui/material';

const Kyivstar = () => <Box sx={{ width: '27px', height: '27px' }} component={'img'} src='./kyivstar-logo.png' alt='kyivstar' />
const Lifecell = () => <Box sx={{ width: '27px', height: '27px' }} component={'img'} src='./lifecell-logo.png' alt='lifecell' />;

const WhatsApp = () => <Box sx={{ width: '27px', height: '27px' }} component={'img'} src='./whatsapp-logo.png' alt='whatsapp' />;
const Telegram = () => <Box sx={{ width: '27px', height: '27px' }} component={'img'} src='./telegram-logo.png' alt='telegram' />;

function MainHeader({ load, isLoaded }) {
    const [openModal, setOpenModal] = useState(false);

    const handleModalOpen = () => setOpenModal(true);

    const onClose = () => setOpenModal(false);

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
                                    }}
                                    onClick={handleModalOpen}
                                >
                                    - Зв'язатися -
                                </Button>

                                <Modal
                                    open={ openModal }
                                    onClose={ (_, reason) => onClose(reason) }
                                    hideBackdrop={ false }
                                >
                                    <Box sx={{ backgroundColor: 'rgba(0,0,0,0.8)', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', borderRadius: '0.3rem' }}>
                                        <List>
                                            <ListSubheader sx={{ backgroundColor: 'rgba(0,0,0,0)', color: 'whitesmoke', textAlign: 'center', cursor: 'default', fontSize: '0.9rem' }}>Подзвонити:</ListSubheader>
                                            <ListItem>
                                                <ListItemButton disableRipple sx={{ '&:hover': { backgroundColor: 'rgba(255,255,255,0.2)' } }}>
                                                    <Link target='_top' href='tel:+380978357007'>
                                                        <ListItemIcon sx={{ minWidth: 0, pr: 1, cursor: 'pointer' }}>
                                                            <Kyivstar />
                                                        </ListItemIcon>
                                                    </Link>

                                                    <Link target='_top' href='tel:+380978357007'>
                                                        <ListItemText sx={{ color: 'whitesmoke', '& > span': { cursor: 'pointer' }  }} primary={`+380 97 835 70 07`} />
                                                    </Link>
                                                </ListItemButton>
                                            </ListItem>

                                            <ListItem>
                                                <ListItemButton disableRipple sx={{ '&:hover': { backgroundColor: 'rgba(255,255,255,0.2)' } }}>
                                                    <Link target='_top' href='tel:+380937525497'>
                                                        <ListItemIcon sx={{ minWidth: 0, pr: 1, cursor: 'pointer' }}>
                                                            <Lifecell />
                                                        </ListItemIcon>
                                                    </Link>

                                                    <Link target='_top' href='tel:+380937525497'>
                                                        <ListItemText sx={{ color: 'whitesmoke', '& > span': { cursor: 'pointer' }  }} primary={`+380 93 752 54 97`} />
                                                    </Link>
                                                </ListItemButton>
                                            </ListItem>

                                            <ListSubheader sx={{ backgroundColor: 'rgba(0,0,0,0)', color: 'whitesmoke', textAlign: 'center', cursor: 'default', fontSize: '0.9rem' }}>Написати:</ListSubheader>
                                            <ListItem>
                                                <ListItemButton disableRipple sx={{ '&:hover': { backgroundColor: 'rgba(255,255,255,0.2)' } }}>
                                                    <Link target='_blank' href='https://api.whatsapp.com/send?phone=380937525497'>
                                                        <ListItemIcon sx={{ minWidth: 0, pr: 1, cursor: 'pointer' }}>
                                                            <WhatsApp />
                                                        </ListItemIcon>
                                                    </Link>

                                                    <Link target='_blank' href='https://api.whatsapp.com/send?phone=380937525497'>
                                                        <ListItemText sx={{ color: 'whitesmoke', '& > span': { cursor: 'pointer' }  }} primary={`WhatsApp`} />
                                                    </Link>
                                                </ListItemButton>
                                            </ListItem>

                                            <ListItem>
                                                <ListItemButton disableRipple sx={{ '&:hover': { backgroundColor: 'rgba(255,255,255,0.2)' } }}>
                                                    <Link target='_blank' href='https://t.me/Viktoria_BayrakTB'>
                                                        <ListItemIcon sx={{ minWidth: 0, pr: 1, cursor: 'pointer' }}>
                                                            <Telegram />
                                                        </ListItemIcon>
                                                    </Link>

                                                    <Link target='_blank' href='https://t.me/Viktoria_BayrakTB'>
                                                        <ListItemText sx={{ color: 'whitesmoke', '& > span': { cursor: 'pointer' }  }} primary={`Telegram`} />
                                                    </Link>
                                                </ListItemButton>
                                            </ListItem>
                                        </List>
                                    </Box>
                                </Modal>
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
