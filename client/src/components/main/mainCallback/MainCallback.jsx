import React from 'react';
import {Box, Link, Typography } from '@mui/material';

const Kyivstar = () => <Box sx={{ width: '60px', height: '60px' }} component={'img'} src='./kyivstar-logo.png' alt='kyivstar' />
const Lifecell = () => <Box sx={{ width: '60px', height: '60px' }} component={'img'} src='./lifecell-logo.png' alt='lifecell' />;

const WhatsApp = () => <Box sx={{ width: '80px', height: '80px' }} component={'img'} src='./whatsapp-callback-icon.png' alt='whatsapp' />;
const Telegram = () => <Box sx={{ width: '80px', height: '80px' }} component={'img'} src='./telegram-callback-icon.png' alt='telegram' />;

function MainCallback() {
    return (
        <Box component={'section'} sx={{ width: '100%', height: 'calc(100vh + 8rem)', backgroundColor: 'black', zIndex: 0, position: 'relative' }}>
            <Box sx={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, zIndex: 1, objectFit: 'cover', opacity: 0.5 }}>
                <Box component={'img'} sx={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 60%'}} src={'./city.jpeg'} alt='city' />
            </Box>

            <Box component={'section'} sx={{ display: 'flex', flexDirection: 'row', zIndex: 2, position: 'absolute', top: '6rem', bottom: '6rem', left: '6rem', right: '6rem' }}>
                <Box component={'section'} sx={{ width: '50%',  padding: '0 2rem' }}>
                    <Box component={'section'} sx={{ backgroundColor: '#FCFCFC', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', borderRadius: '0.3rem' }}>
                        <Box component={'section'} sx={{ height: '30%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                            <Typography component={'h1'} sx={{ textAlign: 'center', fontSize: '1.8rem', fontWeight: 600, color: '#788d58' }}>
                                Зв'яжіться з нами
                            </Typography>

                            <Typography component={'p'} sx={{ fontSize: '1rem', textAlign: 'center', pl: '15%', pr: '15%', fontWeight: 500 }}>
                                Зрозумілий та цікавий заклик до дії, що підвищує конверсію вашої сторінки
                            </Typography>
                        </Box>

                        <Box component={'section'} sx={{ height: '70%',  display: 'flex', flexDirection: 'column' }}>
                            <Box component={'section'} sx={{ height: '50%', display: 'flex', flexDirection: 'row' }}>
                                <Box component={'section'} sx={{ height: '100%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <Link target='_blank' href='https://api.whatsapp.com/send?phone=380937525497' sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '10rem', width: '10rem', '&:hover': { backgroundColor: '#e0e0e0', borderRadius: '0.3rem' }, textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>
                                        <WhatsApp />
                                    
                                        <Typography component={'p'} sx={{ cursor: 'pointer' }}>
                                            WhatsApp
                                        </Typography>
                                    </Link>
                                </Box>

                                
                                <Box component={'section'} sx={{ height: '100%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <Link target='_blank' href='https://t.me/Viktoria_BayrakTB' sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '10rem', width: '10rem', '&:hover': { backgroundColor: '#e0e0e0', borderRadius: '0.3rem' }, textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>
                                        <Telegram />

                                        <Typography component={'p'} sx={{ cursor: 'pointer' }}>
                                            Telegram
                                        </Typography>
                                    </Link>
                                </Box>
                            </Box>

                            <Box component={'section'} sx={{ height: '50%', display: 'flex', flexDirection: 'row' }}>
                                <Box component={'section'} sx={{ height: '100%', width: '100%', display: 'flex', justifyContent: 'center' }}>
                                    <Link target='_top' href='tel:+380978357007' sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '10rem', width: '10rem', '&:hover': { backgroundColor: '#e0e0e0', borderRadius: '0.3rem' }, textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>
                                        <Kyivstar />

                                        <Typography component={'p'} sx={{ cursor: 'pointer' }}>
                                            +380978357007
                                        </Typography>
                                    </Link>
                                </Box>

                                <Box component={'section'} sx={{ height: '100%', width: '100%', display: 'flex', justifyContent: 'center' }}>
                                    <Link target='_top' href='tel:+380937525497' sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '10rem', width: '10rem', '&:hover': { backgroundColor: '#e0e0e0', borderRadius: '0.3rem' }, textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>
                                        <Lifecell />

                                        <Typography component={'p'} sx={{ cursor: 'pointer' }}>
                                            +380937525497
                                        </Typography>
                                    </Link>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>

                <Box component={'section'} sx={{ width: '50%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
                    <Box component={'section'} sx={{ display: 'flex', flexDirection: 'row' }}>
                        <Box component={'img'} src='check.png' alt='check' sx={{ width: '3rem', height: '3rem', margin: '0 2rem' }} />

                        <Box component={'section'}>
                            <Typography component={'h1'} sx={{ fontSize: '1.4rem', fontWeight: 600, color: 'whitesmoke', marginBottom: '0.8rem' }}>
                                Перевірена якість
                            </Typography>  

                            <Typography component={'p'} sx={{ fontSize: '1rem', fontWeight: 500, color: 'whitesmoke' }}>
                                Намагайтесь використовувати приблизно однаковий об'єм
                                тексту у описі усіх елементів сітки, щоб вони виглядали органічно
                            </Typography>
                        </Box>
                    </Box>

                    <Box component={'section'} sx={{ display: 'flex', flexDirection: 'row' }}>
                        <Box component={'img'} src='check.png' alt='check' sx={{ width: '3rem', height: '3rem', margin: '0 2rem'  }} />

                        <Box component={'section'}>
                            <Typography component={'h1'} sx={{ fontSize: '1.4rem', fontWeight: 600, color: 'whitesmoke', marginBottom: '0.8rem' }}>
                                Безкоштовна консультація
                            </Typography>   

                            <Typography component={'p'} sx={{ fontSize: '1rem', fontWeight: 500, color: 'whitesmoke' }}>
                                Намагайтесь використовувати приблизно однаковий об'єм
                                тексту у описі усіх елементів сітки, щоб вони виглядали органічно
                            </Typography>
                        </Box>
                    </Box>

                    <Box component={'section'} sx={{ display: 'flex', flexDirection: 'row' }}>
                        <Box component={'img'} src='check.png' alt='check' sx={{ width: '3rem', height: '3rem', margin: '0 2rem'  }} />

                        <Box component={'section'}>
                            <Typography component={'h1'} sx={{ fontSize: '1.4rem', fontWeight: 600, color: 'whitesmoke', marginBottom: '0.8rem' }}>
                                30 днів гарантії
                            </Typography>   

                            <Typography component={'p'} sx={{ fontSize: '1rem', fontWeight: 500, color: 'whitesmoke' }}>
                                Намагайтесь використовувати приблизно однаковий об'єм
                                тексту у описі усіх елементів сітки, щоб вони виглядали органічно
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default MainCallback;
