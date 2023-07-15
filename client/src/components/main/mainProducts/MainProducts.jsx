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

function MainProducts() {
    return (
        <Box id='services' component={'section'} sx={{width: '100%', minHeight: 'calc(100vh + 14em)', padding: '6rem', backgroundColor: '#F1EEEE' }}>
            <Box component={'section'} sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Box component={'section'} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: '3rem' }}>
                    <Typography component={'h1'} sx={{ textAlign: 'center', fontSize: '2.8rem', fontWeight: 500, color: '#788d58', mb: '2rem' }}>
                        Перелік наших послуг
                    </Typography>

                    <Typography component={'h1'} sx={{ fontSize: '1.1rem', textAlign: 'center', pl: '15%', pr: '15%', fontWeight: 500 }}>
                        Агентство нерухомості TOP - ваш надійний партнер у справах нерухомості з
                        широким спектром послуг, які допоможуть вам знайти ідеальну нерухомість,
                        відповідну за вашими потребами та бюджетом
                    </Typography>
                </Box>

                <Grid container component={'section'} sx={{ width: '100%' }}>
                    {
                        items.map(e => {
                            return (
                                <Fragment key={e._id}>
                                    <Grid item xs={4}>
                                        <Box component={'section'} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '2rem', '&:hover': { backgroundColor: '#e0e0e0' } }}>
                                            <Box component={'img'} src={e.image} alt={e.title} sx={{ width: '6rem', height: '6rem', mb: '1.5rem' }} />

                                            <Typography component={'h2'} sx={{ fontWeight: 500, mb: '1rem', fontSize: '1.3rem' }}>
                                                { e.title }
                                            </Typography>

                                            <Typography component={'p'} sx={{ textAlign: 'center', fontSize: '0.95rem' }}>
                                                { e.description }
                                            </Typography>
                                        </Box>
                                    </Grid>
                                </Fragment>
                            );
                        })
                    }
                </Grid>
            </Box>
        </Box>
    );
}

export default MainProducts;
