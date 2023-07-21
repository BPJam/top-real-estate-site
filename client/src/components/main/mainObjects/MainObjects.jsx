import React from 'react';

import { Box, Typography } from '@mui/material';

import mainObjectStyle from './mainObjectsStyle';

function MainObjects() {
    return (
        <Box id='objects' component={'section'} sx={ mainObjectStyle }>
            <Box component={'section'} sx={ mainObjectStyle.wrapper }>
                <Box component={'section'} sx={ mainObjectStyle.header }>
                    <Typography component={'h1'} sx={ mainObjectStyle.header.h1 }>
                        Наші пропозиції
                    </Typography>

                    <Typography component={'p'} sx={ mainObjectStyle.header.p }>
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
