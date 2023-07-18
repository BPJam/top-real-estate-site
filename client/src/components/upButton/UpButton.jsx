import React, { useEffect, useState } from 'react';

import { Link, Typography } from '@mui/material';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';

import upButonStyle from './upButonStyle';

function UpButton() {
    const [scroll, setScroll] = useState(0);

    const handleScroll = () => {
        setScroll(window.scrollY);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll)
    }, []);

    return (
        <>
            {
                scroll < 700 ?
                    <></>
                :
                    <Link href='#up' disableRipple variant='text' sx={ upButonStyle }>
                        <ArrowCircleUpIcon sx={ upButonStyle.icon } />

                        <Typography sx={ upButonStyle.text }>
                            Доверху
                        </Typography>
                    </Link>
            }
        </>
    );
}

export default UpButton;
