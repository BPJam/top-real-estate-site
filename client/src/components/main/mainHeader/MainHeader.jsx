import React, { useState } from 'react';

import
{
    Box,
    Button,
    Card,
    CardContent,
    CardMedia,
    CircularProgress,
    Link,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    ListSubheader,
    Modal,
    Typography
} from '@mui/material';

import mainHeaderStyle from './mainHeaderStyle';

const Kyivstar = () => <Box sx={ mainHeaderStyle.logoImage } component={'img'} src='./kyivstar-logo.png' alt='kyivstar' />;
const Lifecell = () => <Box sx={ mainHeaderStyle.logoImage } component={'img'} src='./lifecell-logo.png' alt='lifecell' />;
const WhatsApp = () => <Box sx={ mainHeaderStyle.logoImage } component={'img'} src='./whatsapp-logo.png' alt='whatsapp' />;
const Telegram = () => <Box sx={ mainHeaderStyle.logoImage } component={'img'} src='./telegram-logo.png' alt='telegram' />;

function MainHeader({ load, isLoaded }) {
    const [openModal, setOpenModal] = useState(false);

    const handleModalOpen = () => setOpenModal(true);

    const onClose = () => setOpenModal(false);

    return (
        <Box component={'section'} sx={ mainHeaderStyle }>
            <Card sx={ mainHeaderStyle.wrapper }>
                <Box sx={ mainHeaderStyle.coverVideo }>
                    <CardMedia
                        component='video'
                        image={'./cover-video.mp4'}
                        autoPlay
                        muted
                        loop
                        sx={ mainHeaderStyle.coverVideo.video }
                        onLoadedData={() => isLoaded()}
                    />
                </Box>

                <CardContent sx={ mainHeaderStyle.content }>
                    {
                        load ?
                            <Box sx={ mainHeaderStyle.content.wrapper }>
                                <Typography component='h1' color={'whitesmoke'} sx={ mainHeaderStyle.content.h1 }>
                                    TOP Real Estate
                                </Typography>

                                <Typography component='p' color={'whitesmoke'} sx={ mainHeaderStyle.content.p }>
                                    Агентство преміум-класу в Києві, яке пишається своєю швидкістю
                                    та впевненістю в захисті інтересів наших клієнтів на ринку нерухомості
                                </Typography>

                                <Button
                                    variant='contained'
                                    sx={ mainHeaderStyle.content.button }
                                    onClick={handleModalOpen}
                                >
                                    - Зв'язатися -
                                </Button>

                                <Modal
                                    open={ openModal }
                                    onClose={ (_, reason) => onClose(reason) }
                                    hideBackdrop={ false }
                                >
                                    <Box sx={ mainHeaderStyle.modal }>
                                        <List>
                                            <ListSubheader sx={ mainHeaderStyle.modal.partHeader }>Подзвонити:</ListSubheader>
                                            <ListItem>
                                                <ListItemButton disableRipple sx={ mainHeaderStyle.modal.item }>
                                                    <Link target='_top' href='tel:+380978357007'>
                                                        <ListItemIcon sx={ mainHeaderStyle.modal.item.icon }>
                                                            <Kyivstar />
                                                        </ListItemIcon>
                                                    </Link>

                                                    <Link target='_top' href='tel:+380978357007'>
                                                        <ListItemText
                                                            sx={ mainHeaderStyle.modal.item.text }
                                                            primary={`+380 97 835 70 07`}
                                                        />
                                                    </Link>
                                                </ListItemButton>
                                            </ListItem>

                                            <ListItem>
                                                <ListItemButton disableRipple sx={ mainHeaderStyle.modal.item }>
                                                    <Link target='_top' href='tel:+380937525497'>
                                                        <ListItemIcon sx={ mainHeaderStyle.modal.item.icon }>
                                                            <Lifecell />
                                                        </ListItemIcon>
                                                    </Link>

                                                    <Link target='_top' href='tel:+380937525497'>
                                                        <ListItemText
                                                            sx={ mainHeaderStyle.modal.item.text }
                                                            primary={`+380 93 752 54 97`}
                                                        />
                                                    </Link>
                                                </ListItemButton>
                                            </ListItem>

                                            <ListSubheader sx={ mainHeaderStyle.modal.partHeader }>Написати:</ListSubheader>
                                            <ListItem>
                                                <ListItemButton disableRipple sx={ mainHeaderStyle.modal.item }>
                                                    <Link target='_blank' href='https://api.whatsapp.com/send?phone=380937525497'>
                                                        <ListItemIcon sx={ mainHeaderStyle.modal.item.icon }>
                                                            <WhatsApp />
                                                        </ListItemIcon>
                                                    </Link>

                                                    <Link target='_blank' href='https://api.whatsapp.com/send?phone=380937525497'>
                                                        <ListItemText
                                                            sx={ mainHeaderStyle.modal.item.text }
                                                            primary={`WhatsApp`}
                                                        />
                                                    </Link>
                                                </ListItemButton>
                                            </ListItem>

                                            <ListItem>
                                                <ListItemButton disableRipple sx={ mainHeaderStyle.modal.item }>
                                                    <Link target='_blank' href='https://t.me/Viktoria_BayrakTB'>
                                                        <ListItemIcon sx={ mainHeaderStyle.modal.item.icon }>
                                                            <Telegram />
                                                        </ListItemIcon>
                                                    </Link>

                                                    <Link target='_blank' href='https://t.me/Viktoria_BayrakTB'>
                                                        <ListItemText
                                                            sx={ mainHeaderStyle.modal.item.text }
                                                            primary={`Telegram`}
                                                        />
                                                    </Link>
                                                </ListItemButton>
                                            </ListItem>
                                        </List>
                                    </Box>
                                </Modal>
                            </Box>
                        :
                            <Box sx={ mainHeaderStyle.loading }>
                                <CircularProgress color='inherit' />

                                <Typography component="p" sx={ mainHeaderStyle.loading.text }>
                                    Please wait, loading... 
                                </Typography>
                            </Box>
                            
                    }
                </CardContent>
            </Card>
        </Box>
    );
}

export default MainHeader;
