import React from 'react';

import { Box, Typography } from '@mui/material';

import mainDirectorStyle from './mainDirectorStyle';

function MainDirector() {
    return (
        <Box component={'section'} sx={ mainDirectorStyle }>
            <Box component={'section'} sx={ mainDirectorStyle.wrapper }>
                <Box component={'section'} sx={ mainDirectorStyle.text }>
                    <Typography component={'h1'} sx={ mainDirectorStyle.text.h1 }>
                        Софійчук Вікторія Константинівна
                    </Typography>
                    
                    <Typography component={'p'} sx={ mainDirectorStyle.text.position }>
                        Генеральний Директор 
                    </Typography>

                    <Typography component={'p'} sx={ mainDirectorStyle.text.thought }>
                        "Чіткий та зрозумілий дескріпшн стосовно послуг, чи товарів,
                        що виробляє ваша компанія допомагає відвідувачам сайту швидко
                        зрозуміти релевантність вашої пропозиції"
                    </Typography>

                    <Typography component={'p'} sx={ mainDirectorStyle.text.addition }>
                        У деяких випадках, звернення ключових персон
                        компанії допомагає побудувати відносини з відвідувачами вашої
                        сторінки
                    </Typography>
                </Box>

                <Box
                    component={'img'}
                    sx={ mainDirectorStyle.img }
                    src='./director.jpeg'
                    alt='director'
                />
            </Box>
        </Box>
    );
}

export default MainDirector;
