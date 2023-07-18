import React, { useEffect, useState } from 'react';
import { Button, Link, Typography } from '@mui/material';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';

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
                    <Link href='#up' disableRipple variant='text' sx={{ position: 'fixed', zIndex: 9999, bottom: '40px', right: '40px', display: 'flex', width: '80px', height: '80px', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', ':hover': { transform: 'scale(1.3)', transition: 'transform ease-in-out .3s', background: 'initial' } }}>
                        <ArrowCircleUpIcon sx={{ width: '40px', height: '40px', color: '#788d58' }} />
                        <Typography sx={{ fontSize: '0.8rem', color: '#788d58' }}>
                            Доверху
                        </Typography>
                    </Link>
            }
        </>
    );
}

export default UpButton;
