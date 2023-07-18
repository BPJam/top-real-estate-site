import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import PlaceIcon from '@mui/icons-material/Place';

const Kyivstar = () => <Box sx={{ width: '20px', height: '20px', marginRight: '0.3rem' }} component={'img'} src='./kyivstar-logo.png' alt='kyivstar' />;
const Lifecell = () => <Box sx={{ width: '20px', height: '20px', marginRight: '0.3rem' }} component={'img'} src='./lifecell-logo.png' alt='lifecell' />;

function Footer() {
    return (
        <Box component={'footer'} sx={{ width: '100%', height: 'calc(60vh + 6rem)', position: 'relative' }}>
            <Box component={'section'} sx={{ height: '75%', padding: '6rem' }}>
                <Box component={'section'} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', height: '100%' }}>
                    <Box component={'section'} sx={{ width: '55%' }}>
                        <Box component={'img'} src='./logo.png' alt='logo' sx={{ minWidth: '5rem', minHeight: '5rem', maxWidth: '5rem', maxHeight: '5rem', borderRadius: '100%', overflow: 'hidden', marginBottom: '1rem' }} />

                        <Typography component={'p'} sx={{ fontSize: '1.2rem', fonrWeight: '600' }}>
                            ФОП "TOP Real Estate"
                        </Typography>
                    </Box>

                    <Box component={'section'} sx={{ display: 'flex', flexDirection: 'row', width: '45%' }}>
                        <Box component={'section'} sx={{ width: '50%', display: 'flex', flexDirection: 'column' }}>
                            <Typography component={'h1'} sx={{ fontSize: '1.4rem', color: '#788d58', fontWeight: '600', marginBottom: '1rem' }}>
                                Про компанію
                            </Typography>

                            <Typography component={'p'} sx={{ flexGrow: 1, '&:hover': { textDecoration:'underline' }, cursor: 'pointer' }}>
                                Політика конфіденційності 
                            </Typography>

                            <Typography component={'p'} sx={{ flexGrow: 1, '&:hover': { textDecoration:'underline' }, cursor: 'pointer' }}>
                                Угода користувача
                            </Typography>

                            <Typography component={'p'} sx={{ flexGrow: 1, '&:hover': { textDecoration:'underline' }, cursor: 'pointer' }}>
                                Для преси
                            </Typography>
                        </Box>

                        <Box component={'section'} sx={{ width: '50%', display: 'flex', flexDirection: 'column' }}>
                            <Typography component={'h1'} sx={{ fontSize: '1.4rem', color: '#788d58', fontWeight: '600', marginBottom: '1rem' }}>
                                Контакти
                            </Typography>

                            <Box component={'section'} sx={{ flexGrow: 1, display: 'flex', flexDirection: 'row', alignItems: 'top', justifyContent: 'start', textDecoration: 'none', color: 'inherit'  }}>
                                <PlaceIcon sx={{ width: '20px', height: '20px', marginRight: '0.3rem' }} />
                            
                                <Link target='_blank' href='https://goo.gl/maps/vxvCUUkvesQvbvc38'>
                                    <Typography component={'p'} sx={{ cursor: 'pointer', '&:hover': { textDecoration:'underline' }, cursor: 'pointer' }}>
                                        IQ Business Center
                                    </Typography>
                                </Link>
                            </Box>

                            <Box component={'section'} sx={{ flexGrow: 1, display: 'flex', flexDirection: 'row', alignItems: 'top', justifyContent: 'start', textDecoration: 'none', color: 'inherit' }}>
                                <Kyivstar />
                            
                                <Link target='_top' href='tel:+380978357007'>
                                    <Typography component={'p'} sx={{ cursor: 'pointer', '&:hover': { textDecoration:'underline' }, cursor: 'pointer' }}>
                                        +380978357007
                                    </Typography>
                                </Link>
                            </Box>

                            <Box component={'section'} sx={{ flexGrow: 1, display: 'flex', flexDirection: 'row', alignItems: 'top', justifyContent: 'start', textDecoration: 'none', color: 'inherit' }}>
                                <Lifecell />
                            
                                <Link target='_top' href='tel:+380937525497'>
                                    <Typography component={'p'} sx={{ cursor: 'pointer', '&:hover': { textDecoration:'underline' }, cursor: 'pointer' }}>
                                        +380937525497
                                    </Typography>
                                </Link>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>

            <Box component={'section'} sx={{ height: '25%', backgroundColor: 'black', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around', paddingTop: '1rem' }}>
                <Typography component={'p'} sx={{ color: 'whitesmoke', textAlign: 'center', fontSize: '0.8rem' }}>
                    РОЗРОБЛЯВ:
                    <Link target='_blank' href='https://www.linkedin.com/in/mykhailo-potseluiev/' sx={{ textDecoration: 'none' }}>
                        <Typography component={'p'} sx={{ color: 'whitesmoke', fontSize: '0.9rem', cursor: 'pointer', textAlign: 'center' }}>
                            M Y K H A I L O <span style={{ color: 'gold' }}>|</span> P O T S E L U I E V
                        </Typography>
                    </Link>
                </Typography>

                <Typography component={'p'} sx={{ color: 'whitesmoke', fontSize: '0.8rem' }}>
                    2023 &copy; Mykhailo Potseluiev 
                </Typography>
            </Box>
        </Box>
    );
}

export default Footer;
