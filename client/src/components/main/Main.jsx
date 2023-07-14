import React from 'react';
import { Box } from '@mui/material';
import MainHeader from './mainHeader/MainHeader';

function Main({ load, isLoaded }) {
    return (
        <Box component={'main'}>
            <MainHeader load={load} isLoaded={isLoaded} />
        </Box>
    );
}

export default Main;
