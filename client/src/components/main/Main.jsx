import React from 'react';
import { Box } from '@mui/material';
import MainHeader from './mainHeader/MainHeader';
import MainCompanyInfo from './mainCompanyInfo/MainCompanyInfo';
import MainProducts from './mainProducts/MainProducts';

function Main({ load, isLoaded }) {
    return (
        <Box component={'main'}>
            <MainHeader load={load} isLoaded={isLoaded} />
            <MainCompanyInfo load={load} />
            <MainProducts load={load} />
        </Box>
    );
}

export default Main;
