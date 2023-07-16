import React, { useState } from 'react';
import
{
    Box,
    Collapse,
    Link,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Modal
} from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import InstagramIcon from '@mui/icons-material/Instagram';
import SendIcon from '@mui/icons-material/Send';
import CallIcon from '@mui/icons-material/Call';
import PlaceIcon from '@mui/icons-material/Place';
import headerStyle from './headerStyle';

const Kyivstar = () => <Box sx={{ width: '27px', height: '27px' }} component={'img'} src='./kyivstar-logo.png' alt='kyivstar' />
const Lifecell = () => <Box sx={{ width: '27px', height: '27px' }} component={'img'} src='./lifecell-logo.png' alt='lifecell' />;

const WhatsApp = () => <Box sx={{ width: '27px', height: '27px' }} component={'img'} src='./whatsapp-logo.png' alt='whatsapp' />;
const Telegram = () => <Box sx={{ width: '27px', height: '27px' }} component={'img'} src='./telegram-logo.png' alt='telegram' />;


function Header({ load }) {
    const [open, setOpen] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [modalTask, setModalTask] = useState('');

    const handleClick = (bool) => {
        setOpen(bool);
    }

    const eventTaskClick = (task) => {
        setOpenModal(true);
        setModalTask(task);
    }

    const onClose = () => setOpenModal(false);

    if (!load) {
        return <div></div>;
    }
    
    return ( 
        <Box component={'header'} sx={ headerStyle.globalHeader }>
            <Box sx={ headerStyle.globalHeader.logoWrapper } onClick={() => window.location.assign('/')}> {/* to inst */}
                <Box component={'img'} src="./logo.jpg" alt="logo" />
            </Box>

            <Box component={'nav'} sx={ headerStyle.globalHeader.nav }>
                <List sx={ headerStyle.globalHeader.nav.menu }>
                    <ListItem sx={ headerStyle.globalHeader.nav.menu.item }>
                        <Link href='#about-us'>
                            <ListItemText primary='ПРО&nbsp;НАС' />
                        </Link>
                    </ListItem>

                    <ListItem sx={ headerStyle.globalHeader.nav.menu.item }>
                        <Link href='#services'>
                            <ListItemText primary={`ПОСЛУГИ`} />
                        </Link>
                    </ListItem>

                    <ListItem sx={ headerStyle.globalHeader.nav.menu.item }>
                        <Link href='#objects'>
                            <ListItemText primary={`ПРОПОЗИЦІЇ`} />
                        </Link>
                    </ListItem>

                    <ListItem sx={ headerStyle.globalHeader.nav.menu.item }>
                        <Link href='#faq'>
                            <ListItemText primary={`ПИТАННЯ`} />
                        </Link>
                    </ListItem>
                </List>

                <List sx={ headerStyle.globalHeader.nav.contacts }>
                    <ListItem sx={ headerStyle.globalHeader.nav.contacts.item }>
                        <ListItemButton onMouseEnter={() => handleClick(true)} onMouseLeave={() => handleClick(false)} disableRipple>
                            <ListItemText primary="Контакти" sx={{ cursor: 'pointer', pr: 3 }} />

                            {open ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>

                        <Collapse
                            in={ open }
                            onMouseEnter={ () => handleClick(true) }
                            onMouseLeave={ () => handleClick(false) }
                            timeout="auto"
                            unmountOnExit
                            sx={{ position: 'absolute', top: 'calc(100% - 0.5em)' }}
                        >
                            <List component={'section'} disablePadding>
                                <ListItem disablePadding>
                                    <ListItemButton onClick={() => eventTaskClick('call')} disableRipple>
                                        <ListItemIcon sx={{ minWidth: 0, pr: 1, color: 'whitesmoke', cursor: 'pointer' }}>
                                            <CallIcon />
                                        </ListItemIcon>

                                        <ListItemText sx={{ color: 'whitesmoke', '& > span': { cursor: 'pointer' } }} primary={`Подзвонити`} />
                                    </ListItemButton>
                                </ListItem>

                                <ListItem disablePadding>
                                    <ListItemButton onClick={() => eventTaskClick('write')} disableRipple>
                                        <ListItemIcon sx={{ minWidth: 0, pr: 1, color: 'whitesmoke', cursor: 'pointer' }}>
                                            <SendIcon />
                                        </ListItemIcon>

                                        <ListItemText sx={{ color: 'whitesmoke', '& > span': { cursor: 'pointer' } }} primary={`Написати`} />
                                    </ListItemButton>
                                </ListItem>

                                <ListItem disablePadding>
                                    <ListItemButton disableRipple>
                                        <Link target={'_blank'} href={'https://instagram.com/top_in_estate?igshid=MjEwN2IyYWYwYw=='}>
                                            <ListItemIcon sx={{ minWidth: 0, pr: 1, color: 'whitesmoke', cursor: 'pointer' }}>
                                                <InstagramIcon />
                                            </ListItemIcon>
                                        </Link>

                                        
                                        <Link target={'_blank'} href={'https://instagram.com/top_in_estate?igshid=MjEwN2IyYWYwYw=='}>
                                            <ListItemText sx={{ color: 'whitesmoke', '& > span': { cursor: 'pointer' } }}  primary={`Instagram`} />
                                        </Link>
                                    </ListItemButton>
                                </ListItem>
                            </List>
                        </Collapse>
                    </ListItem>

                    <ListItem sx={ headerStyle.globalHeader.nav.contacts.item }>
                        <ListItemIcon sx={{ minWidth: 0, pr: 1 }}>
                            <PlaceIcon />
                        </ListItemIcon>

                        <Link target={'_blank'} href={'https://goo.gl/maps/vxvCUUkvesQvbvc38'}>
                            <ListItemText primary={`IQ Business Center`} />
                        </Link>
                    </ListItem>
                </List>
            </Box>

            <Modal
                open={ openModal }
                onClose={ (_, reason) => onClose(reason) }
                hideBackdrop={ false }
            >
                <Box sx={{ backgroundColor: 'rgba(0,0,0,0.8)', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                    <List>
                        <ListItem>
                            <ListItemButton disableRipple sx={{ '&:hover': { backgroundColor: 'rgba(255,255,255,0.2)', } }}>
                                <Link target={ modalTask === 'write' ? '_blank' : '_top' } href={ modalTask === 'call' ? 'tel:+380978357007' : modalTask === 'write' ? 'https://api.whatsapp.com/send?phone=380937525497' : '#' }>
                                    <ListItemIcon sx={{ minWidth: 0, pr: 1, cursor: 'pointer' }}>
                                        { 
                                            modalTask === 'call' ?
                                                <Kyivstar />
                                            :
                                                modalTask === 'write' ?
                                                    <WhatsApp />
                                                :
                                                    <ListItemText primary={''} />
                                        }
                                    </ListItemIcon>
                                </Link>

                                <Link target={ modalTask === 'write' ? '_blank' : '_top' } href={ modalTask === 'call' ? 'tel:+380978357007' : modalTask === 'write' ? 'https://api.whatsapp.com/send?phone=380937525497' : '#' }>
                                    { 
                                        modalTask === 'call' ?
                                            <ListItemText sx={{ color: 'whitesmoke', '& > span': { cursor: 'pointer' }  }} primary={`+380 97 835 70 07`} />
                                        :
                                            modalTask === 'write' ?
                                                <ListItemText sx={{ color: 'whitesmoke', '& > span': { cursor: 'pointer' } }} primary={`WhatsApp`} />
                                            :
                                                <ListItemText primary={''} />
                                    }
                                </Link>
                            </ListItemButton>
                        </ListItem>

                        <ListItem>
                            <ListItemButton disableRipple sx={{ '&:hover': { backgroundColor: 'rgba(255,255,255,0.2)', } }}>
                                <Link target={ modalTask === 'write' ? '_blank' : '_top' } href={ modalTask === 'call' ? 'tel:+380937525497' : modalTask === 'write' ? 'https://t.me/Viktoria_BayrakTB' : '#' }>
                                    <ListItemIcon sx={{ minWidth: 0, pr: 1, cursor: 'pointer' }}>
                                        { 
                                            modalTask === 'call' ?
                                                <Lifecell />
                                            :
                                                modalTask === 'write' ?
                                                    <Telegram />
                                                :
                                                    <ListItemText primary={''} />
                                        }                                
                                    </ListItemIcon>
                                </Link>

                                <Link target={ modalTask === 'write' ? '_blank' : '_top' } href={ modalTask === 'call' ? 'tel:+380937525497' : modalTask === 'write' ? 'https://t.me/Viktoria_BayrakTB' : '#' }>
                                    { 
                                        modalTask === 'call' ?
                                            <ListItemText sx={{ color: 'whitesmoke', '& > span': { cursor: 'pointer' } }} primary={'+380 93 752 54 97'} />
                                        :
                                            modalTask === 'write' ?
                                                <ListItemText sx={{ color: 'whitesmoke', '& > span': { cursor: 'pointer' } }} primary={'Telegram'} />
                                            :
                                                <ListItemText primary={''} />
                                    }
                                </Link>
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Box>
            </Modal>
        </Box>
    );
}

export default Header;
