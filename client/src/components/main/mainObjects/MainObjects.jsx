import React from 'react';
import { Box, Typography } from '@mui/material';

function MainObjects() {
    return (
        <Box id='objects' component={'section'} sx={{width: '100%', height: 'calc(100vh + 12rem)', padding: '6rem' }}>
            <Box component={'section'} sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Box component={'section'} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: '3rem' }}>
                    <Typography component={'h1'} sx={{ textAlign: 'center', fontSize: '2.8rem', fontWeight: 500, color: '#788d58', mb: '2rem' }}>
                        Наші пропозиції
                    </Typography>

                    <Typography component={'p'} sx={{ fontSize: '1.1rem', textAlign: 'center', pl: '15%', pr: '15%', fontWeight: 500 }}>
                        Наш офіс розташований в престижному районі Києва, і ми покриваємо всі
                        центральні райони міста. Ми пишаємося наданням персоналізованого
                        обслуговування нашим клієнтам і забезпеченням високоякісного досвіду в
                        нерухомості
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}

export default MainObjects;
