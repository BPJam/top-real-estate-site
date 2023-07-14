import React from 'react';
import { Box } from '@mui/material';
import MainHeader from './mainHeader/MainHeader';
import MainCompanyInfo from './mainCompanyInfo/MainCompanyInfo';

function Main({ load, isLoaded }) {
    return (
        <Box component={'main'}>
            <MainHeader load={load} isLoaded={isLoaded} />
            <MainCompanyInfo load={load} />
        </Box>
    );
}

export default Main;
