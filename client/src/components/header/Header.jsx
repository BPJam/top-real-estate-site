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

const Kyivstar = () => <Box sx={ headerStyle.logoImage } component={'img'} src='./kyivstar-logo.png' alt='kyivstar' />;
const Lifecell = () => <Box sx={ headerStyle.logoImage } component={'img'} src='./lifecell-logo.png' alt='lifecell' />;
const WhatsApp = () => <Box sx={ headerStyle.logoImage } component={'img'} src='./whatsapp-logo.png' alt='whatsapp' />;
const Telegram = () => <Box sx={ headerStyle.logoImage } component={'img'} src='./telegram-logo.png' alt='telegram' />;

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

    if (!load) return <></>;
    
    return ( 
        <Box id='up' component={'header'} sx={ headerStyle }>
            <Link
                target={'_blank'}
                href={'https://instagram.com/top_in_estate?igshid=MjEwN2IyYWYwYw=='}
                sx={ headerStyle.logoWrapper }
            >
                <Box component={'img'} src="./logo-head.png" alt="logo" />
            </Link>

            <Box component={'nav'} sx={ headerStyle.nav }>
                <List sx={ headerStyle.nav.menu }>
                    <ListItem sx={ headerStyle.nav.menu.item }>
                        <Link href='#about-us'>
                            <ListItemText primary='ПРО&nbsp;НАС' />
                        </Link>
                    </ListItem>

                    <ListItem sx={ headerStyle.nav.menu.item }>
                        <Link href='#services'>
                            <ListItemText primary={`ПОСЛУГИ`} />
                        </Link>
                    </ListItem>

                    <ListItem sx={ headerStyle.nav.menu.item }>
                        <Link href='#objects'>
                            <ListItemText primary={`ПРОПОЗИЦІЇ`} />
                        </Link>
                    </ListItem>

                    <ListItem sx={ headerStyle.nav.menu.item }>
                        <Link href='#faq'>
                            <ListItemText primary={`ПИТАННЯ`} />
                        </Link>
                    </ListItem>
                </List>

                <List sx={ headerStyle.nav.contacts }>
                    <ListItem sx={ headerStyle.nav.contacts.item }>
                        <ListItemButton
                            onMouseEnter={() => handleClick(true)}
                            onMouseLeave={() => handleClick(false)}
                            disableRipple
                        >
                            <ListItemText primary="Контакти" sx={{ cursor: 'pointer', pr: 3 }} />

                            {open ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>

                        <Collapse
                            in={ open }
                            onMouseEnter={ () => handleClick(true) }
                            onMouseLeave={ () => handleClick(false) }
                            timeout="auto"
                            unmountOnExit
                            sx={ headerStyle.nav.contacts.item.collapse }
                        >
                            <List component={'section'} disablePadding>
                                <ListItem disablePadding>
                                    <ListItemButton onClick={() => eventTaskClick('call')} disableRipple>
                                        <ListItemIcon sx={ headerStyle.nav.contacts.item.collapse.listItemIcon }>
                                            <CallIcon />
                                        </ListItemIcon>

                                        <ListItemText sx={ headerStyle.nav.contacts.item.listItemText } primary={`Подзвонити`} />
                                    </ListItemButton>
                                </ListItem>

                                <ListItem disablePadding>
                                    <ListItemButton onClick={() => eventTaskClick('write')} disableRipple>
                                        <ListItemIcon sx={ headerStyle.nav.contacts.item.collapse.listItemIcon }>
                                            <SendIcon />
                                        </ListItemIcon>

                                        <ListItemText sx={ headerStyle.nav.contacts.item.listItemText } primary={`Написати`} />
                                    </ListItemButton>
                                </ListItem>

                                <ListItem disablePadding>
                                    <ListItemButton disableRipple>
                                        <Link target={'_blank'} href={'https://instagram.com/top_in_estate?igshid=MjEwN2IyYWYwYw=='}>
                                            <ListItemIcon sx={ headerStyle.nav.contacts.item.collapse.listItemIcon }>
                                                <InstagramIcon />
                                            </ListItemIcon>
                                        </Link>

                                        
                                        <Link target={'_blank'} href={'https://instagram.com/top_in_estate?igshid=MjEwN2IyYWYwYw=='}>
                                            <ListItemText sx={ headerStyle.nav.contacts.item.listItemText } primary={`Instagram`} />
                                        </Link>
                                    </ListItemButton>
                                </ListItem>
                            </List>
                        </Collapse>
                    </ListItem>

                    <ListItem sx={ headerStyle.nav.contacts.item }>
                        <ListItemIcon sx={ headerStyle.nav.contacts.item.collapse.listItemIcon.placeIcon }>
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
                <Box sx={ headerStyle.nav.contacts.item.modal }>
                    <List>
                        <ListItem>
                            <ListItemButton disableRipple sx={ headerStyle.nav.contacts.item.modal.listItemButton }>
                                <Link
                                    target={ 
                                        modalTask === 'write' ? 
                                            '_blank'
                                        :
                                            '_top'
                                    }

                                    href={
                                        modalTask === 'call' ?
                                            'tel:+380978357007'
                                        :
                                            modalTask === 'write' ?
                                                'https://api.whatsapp.com/send?phone=380937525497'
                                            :
                                                '#'
                                    }
                                >
                                    <ListItemIcon sx={ headerStyle.nav.contacts.item.modal.listItemButton.listItemIcon }>
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

                                <Link
                                    target={
                                        modalTask === 'write' ?
                                            '_blank'
                                        :
                                            '_top'
                                    }
                                        
                                    href={
                                        modalTask === 'call' ?
                                            'tel:+380978357007'
                                        : 
                                            modalTask === 'write' ?
                                                'https://api.whatsapp.com/send?phone=380937525497'
                                            :
                                                '#'
                                    }
                                >
                                    { 
                                        modalTask === 'call' ?
                                            <ListItemText sx={ headerStyle.nav.contacts.item.listItemText } primary={`+380 97 835 70 07`} />
                                        :
                                            modalTask === 'write' ?
                                                <ListItemText sx={ headerStyle.nav.contacts.item.listItemText } primary={`WhatsApp`} />
                                            :
                                                <ListItemText primary={''} />
                                    }
                                </Link>
                            </ListItemButton>
                        </ListItem>

                        <ListItem>
                            <ListItemButton disableRipple sx={ headerStyle.nav.contacts.item.modal.listItemButton }>
                                <Link
                                    target={
                                        modalTask === 'write' ?
                                            '_blank'
                                        :
                                            '_top'
                                    }
                                    
                                    href={
                                        modalTask === 'call' ?
                                            'tel:+380937525497'
                                        :
                                            modalTask === 'write' ?
                                                'https://t.me/Viktoria_BayrakTB'
                                            :
                                                '#'
                                    }
                                >
                                    <ListItemIcon sx={ headerStyle.nav.contacts.item.modal.listItemButton.listItemIcon }>
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

                                <Link
                                    target={
                                        modalTask === 'write' ?
                                            '_blank'
                                        :
                                            '_top'
                                    }
                                    
                                    href={
                                        modalTask === 'call' ?
                                            'tel:+380937525497'
                                            :
                                                modalTask === 'write' ? 
                                                    'https://t.me/Viktoria_BayrakTB'
                                                : 
                                                    '#' 
                                    }
                                >
                                    { 
                                        modalTask === 'call' ?
                                            <ListItemText sx={ headerStyle.nav.contacts.item.listItemText } primary={'+380 93 752 54 97'} />
                                        :
                                            modalTask === 'write' ?
                                                <ListItemText sx={ headerStyle.nav.contacts.item.listItemText } primary={'Telegram'} />
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
