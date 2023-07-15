import React, { Fragment } from 'react';
import { Box, Grid, Typography } from '@mui/material';

const items = [
    {
        _id: '0',
        title: 'Продаж квартир',
        description: 'Продайте або придбайте квартиру з легкістю та найкращою ціною',
        image: './sell-flat.png'
    },
    {
        _id: '1',
        title: 'Продаж будинків',
        description: 'Продайте або придбайте будинок з легкістю та найкращою ціною',
        image: './sell-house.png'
    },
    {
        _id: '2',
        title: 'Продаж комерції',
        description: 'Продайте або придбайте свій бізнес або інвестиційний об\'єкт',
        image: './sell-commercial.png'
    },
    {
        _id: '3',
        title: 'Оренда квартир',
        description: 'Здайте в оренду або орендуйте свою ідеальну квартиру',
        image: './rent-flat.png'
    },
    {
        _id: '4',
        title: 'Оренда будинків',
        description: 'Здайте в оренду або орендуйте свій ідеальний будинок',
        image: './rent-house.png'
    },
    {
        _id: '5',
        title: 'Оренда комерції',
        description: 'Здайте в оренду або орендуйте під бізнес або інвестиційний об\'єкт',
        image: './rent-commercial.png'
    },
    {
        _id: '6',
        title: 'Оцінка нерухомості',
        description: 'Дізнайтеся реальну вартість вашого майна перед продажем або покупкою',
        image: './price-check.png'
    },
    {
        _id: '7',
        title: 'Продаж та оренда землі',
        description: 'Знайдіть або реалізуйте свою ділянку для будівництва або інвестицій',
        image: './sell-land.png'
    },
    {
        _id: '8',
        title: 'Консультація з нерухомості',
        description: 'Отримайте професійну консультацію щодо нерухомості та процесів з нею',
        image: './consultant.png'
    },
]

function MainObjects() {
    return (
        <Box id='objects' component={'section'} sx={{width: '100%', minHeight: 'calc(100vh + 14em)', padding: '6rem' }}>
            <Box component={'section'} sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Box component={'section'} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: '3rem' }}>
                    <Typography component={'h1'} sx={{ textAlign: 'center', fontSize: '2.8rem', fontWeight: 500, color: '#788d58', mb: '2rem' }}>
                        Наші пропозиції
                    </Typography>

                    <Typography component={'h1'} sx={{ fontSize: '1.1rem', textAlign: 'center', pl: '15%', pr: '15%', fontWeight: 500 }}>
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
