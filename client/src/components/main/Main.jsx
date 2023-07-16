import React from 'react';
import { Box } from '@mui/material';
import MainHeader from './mainHeader/MainHeader';
import MainCompanyInfo from './mainCompanyInfo/MainCompanyInfo';
import MainProducts from './mainProducts/MainProducts';
import MainObjects from './mainObjects/MainObjects';
import MainDirector from './mainDirector/MainDirector';
import MainFAQ from './mainFAQ/MainFAQ';

function Main({ load, isLoaded }) {
    return (
        <Box component={'main'}>
            <MainHeader load={load} isLoaded={isLoaded} />
            <MainCompanyInfo load={load} />
            <MainProducts load={load} />
            <Box component={'section'} sx={{ height: '75vh', width: '100%', backgroundColor: 'black' }}>
                <Box component={'img'} sx={{ height: '100%', width: '100%', objectFit: 'cover', opacity: 0.5 }} src={'./skyscraper.jpeg'} alt='delemiter' />
            </Box>
            <MainObjects load={load} />
            <MainDirector load={load} />
            <MainFAQ load={load} />
        </Box>
    );
}

export default Main;
