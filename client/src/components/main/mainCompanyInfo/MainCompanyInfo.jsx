import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';

function MainCompanyInfo() {
    return (
        <Box component={'section'} sx={{ width: '100%', height: 'calc(100vh + 12rem)', padding: '6rem' }}>
            <Box id='about-us' component={'section'} sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'row', paddingTop: '2rem', paddingBottom: '2.5rem' }}>
                <Box component={'section'} sx={{ width: '50%', height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <Typography component={'h1'} sx={{ lineHeight: 'initial', fontSize: '2.8rem', fontWeight: 500, color: '#788d58', paddingTop: '1rem' }}>
                        Елітна нерухомість Києва та Київської області
                    </Typography>

                    <Box component={'section'} sx={{ display: 'flex', flexDirection: 'column', flexGrow: '1', height: '65%', width: '80%', justifyContent: 'space-around', '& > p': { ':first-letter': { fontWeight: 600, fontSize: '1.3rem' }, fontWeight: 500 } }}>
                        <Typography sx={{ fontSize: '1rem' }} component={'p'}>
                            Наші основні цінності - чесність, порядність та уважність до деталей.
                            Наші досвідчені професіонали були обрані за своєю вірою та зобов'язаністю
                            перед ідеалами нашої компанії.
                        </Typography>    
                            
                        <Typography sx={{ fontSize: '1rem' }} component={'p'}> 
                            Ми маємо довголітній досвід, глибокі знання та пристрасть до нерухомості.
                            Ми спеціалізуємося на продажу, оренді та управлінні різних типів, розмірів
                            та стилів нерухомості, виключно преміум-сегменту, який відповідає найвищим
                            стандартам.
                        </Typography>  

                        <Typography sx={{ fontSize: '1rem' }} component={'p'}> 
                            Ми завжди готові показати вам наші найкращі пропозиції. Зв'яжіться з нами
                            прямо зараз, і ми з радістю надамо вам всю необхідну інформацію про
                            найкращі об'єкти нерухомості в Києві.
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{ width: '50%', height: '100%', objectFit: 'cover', objectPosition: 'bottom', borderRadius: '0.3rem' }} component={'img'} src="./elit-flat.jpeg" alt="elit-flat" />
            </Box>
        </Box>
    );
}

export default MainCompanyInfo;
