import React from 'react';
import { Box, Typography } from '@mui/material';

function MainDirector() {
    return (
        <Box component={'section'} sx={{ width: '100%', height: 'calc(100vh + 6em)', padding: '6rem', backgroundColor: '#F1EEEE' }}>
            <Box component={'section'} sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'row', backgroundColor: 'white' }}>
                <Box component={'section'} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', width: '50%', padding: '7rem 6rem'}}>
                    <Typography component={'h1'} sx={{ textAlign: 'rigth', fontSize: '2rem', fontWeight: 600, color: '#788d58'  }}>
                        Софійчук Вікторія Константинівна
                    </Typography>
                    
                    <Typography component={'p'} sx={{ fontSize: '0.9rem', textAlign: 'rigth', fontWeight: 600 , flexGrow: 1 }}>
                        Генеральний Директор 
                    </Typography>

                    <Typography component={'p'} sx={{ fontSize: '1rem', textAlign: 'rigth', flexGrow: 1, fontWeight: 500 }}>
                        "Чіткий та зрозумілий дескріпшн стосовно послуг, чи товарів,
                        що виробляє ваша компанія допомагає відвідувачам сайту швидко
                        зрозуміти релевантність вашої пропозиції"
                    </Typography>

                    <Typography component={'p'} sx={{ fontSize: '1rem', textAlign: 'rigth', fontWeight: 400, color: '#9EB0A4 '}}>
                        У деяких випадках, звернення ключових персон
                        компанії допомагає побудувати відносини з відвідувачами вашої сторінки
                    </Typography>
                </Box>

                <Box component={'img'} sx={{ width: '50%', height: '100%', objectFit: 'cover', objectPosition: '50% 40%' }} src='./director.jpeg' alt='director' />
            </Box>
        </Box>
    );
}

export default MainDirector;
