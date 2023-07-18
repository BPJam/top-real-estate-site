import React, { useState } from 'react';
import { Footer, Header, Main } from '../components';

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
        </>
    );
}

export default MainPage;
