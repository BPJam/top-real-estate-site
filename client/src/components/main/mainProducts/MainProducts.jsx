import React, { Fragment } from 'react';

import { Box, Grid, Typography } from '@mui/material';

import { items } from './utilities';

import mainProductsStyle from './mainProductsStyle';

function MainProducts() {
    return (
        <Box id='services' component={'section'} sx={ mainProductsStyle }>
            <Box component={'section'} sx={ mainProductsStyle.wrapper }>
                <Box component={'section'} sx={ mainProductsStyle.text }>
                    <Typography component={'h1'} sx={ mainProductsStyle.text.h1 }>
                        Перелік наших послуг
                    </Typography>

                    <Typography component={'p'} sx={ mainProductsStyle.text.p }>
                        Агентство нерухомості TOP - ваш надійний партнер у справах нерухомості з
                        широким спектром послуг, які допоможуть вам знайти ідеальну нерухомість,
                        відповідну за вашими потребами та бюджетом
                    </Typography>
                </Box>

                <Grid container component={'section'} sx={ mainProductsStyle.items }>
                    {
                        items.map(e => {
                            return (
                                <Fragment key={e._id}>
                                    <Grid item xs={4}>
                                        <Box component={'section'} sx={ mainProductsStyle.items.item }>
                                            <Box
                                                component={'img'}
                                                src={e.image}
                                                alt={e.title}
                                                sx={ mainProductsStyle.items.item.img }
                                            />

                                            <Typography component={'h2'} sx={ mainProductsStyle.items.item.h2 }>
                                                { e.title }
                                            </Typography>

                                            <Typography component={'p'} sx={ mainProductsStyle.items.item.p }>
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
