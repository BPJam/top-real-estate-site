import React from 'react';
import { Box } from '@mui/material';

const DelemiterStyle = {
    height: '75vh',
    width: '100%',
    backgroundColor: 'black',

    img: {
        height: '100%',
        width: '100%',
        objectFit: 'cover',
        opacity: 0.5
    }
};

function Delemiter() {
    return ( 
        <Box component={'section'} sx={ DelemiterStyle }>
            <Box
                component={'img'}
                sx={ DelemiterStyle.img }
                src={'./skyscraper.jpeg'}
                alt='delemiter'
            />
        </Box>
    );
}

export default Delemiter;
