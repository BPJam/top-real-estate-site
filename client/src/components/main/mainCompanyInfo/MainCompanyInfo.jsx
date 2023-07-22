import React from 'react';

import { Box, Typography } from '@mui/material';

import mainCompanyInfoStyle from './mainCompanyInfoStyle';

function MainCompanyInfo() {
    return (
        <Box component={'section'} sx={ mainCompanyInfoStyle }>
            <Box id='about-us' component={'section'} sx={ mainCompanyInfoStyle.wrapper }>
                <Box component={'section'} sx={ mainCompanyInfoStyle.text }>
                    <Typography component={'h1'} sx={ mainCompanyInfoStyle.text.h1 }>
                        Елітна нерухомість Києва та Київської області
                    </Typography>

                    <Box component={'section'} sx={ mainCompanyInfoStyle.text.paragraphs }>
                        <Typography component={'p'}>
                            Наші основні цінності - чесність, порядність та уважність до деталей.
                            Наші досвідчені професіонали були обрані за своєю вірою та зобов'язаністю
                            перед ідеалами нашої компанії.
                        </Typography>    
                            
                        <Typography component={'p'}> 
                            Ми маємо довголітній досвід, глибокі знання та пристрасть до нерухомості.
                            Ми спеціалізуємося на продажу, оренді та управлінні різних типів, розмірів
                            та стилів нерухомості, виключно преміум-сегменту, який відповідає найвищим
                            стандартам.
                        </Typography>  

                        <Typography component={'p'}> 
                            Ми завжди готові показати вам наші найкращі пропозиції. Зв'яжіться з нами
                            прямо зараз, і ми з радістю надамо вам всю необхідну інформацію про
                            найкращі об'єкти нерухомості в Києві.
                        </Typography>
                    </Box>
                </Box>

                <Box
                    sx={ mainCompanyInfoStyle.img }
                    component={'img'}
                    src="./elit-flat.jpeg"
                    alt="elit-flat"
                />
            </Box>
        </Box>
    );
}

export default MainCompanyInfo;
