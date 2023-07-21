import React from 'react';

import { Box } from '@mui/material';

import MainHeader from './mainHeader/MainHeader';
import MainCompanyInfo from './mainCompanyInfo/MainCompanyInfo';
import MainProducts from './mainProducts/MainProducts';
import Delemiter from './Delemiter';
import MainObjects from './mainObjects/MainObjects';
import MainDirector from './mainDirector/MainDirector';
import MainFAQ from './mainFAQ/MainFAQ';
import MainCallback from './mainCallback/MainCallback';

function Main({ load, isLoaded }) {
    return (
        <Box component={'main'}>
            <MainHeader load={load} isLoaded={isLoaded} />
            <MainCompanyInfo load={load} />
            <MainProducts load={load} />
            <Delemiter />
            <MainObjects load={load} />
            <MainDirector load={load} />
            <MainFAQ load={load} />
            <MainCallback load={load} />
        </Box>
    );
}

export default Main;
