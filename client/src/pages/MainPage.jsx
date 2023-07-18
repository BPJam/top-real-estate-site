import React, { useState } from 'react';
import { Footer, Header, Main, UpButton } from '../components';

function MainPage() {
    const [load, setLoad] = useState(false);

    const isLoaded = () => {
        setLoad(true);
    }

    return (
        <>
            <Header load={ load } />
            <Main load={ load } isLoaded={ isLoaded } />
            <Footer load={ load } />
            <UpButton />
        </>
    );
}

export default MainPage;
