const mainDirectorStyle = {
    width: '100%',
    height: 'calc(100vh + 8rem)',
    padding: '6rem',
    backgroundColor: '#F1EEEE',

    wrapper: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: '0.3rem'
    },

    text: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        width: '50%',
        padding: '7rem 6rem',

        h1: {
            textAlign: 'rigth',
            fontSize: '1.8rem',
            fontWeight: 600,
            color: 'black'
        },

        position: {
            fontSize: '0.9rem',
            textAlign: 'rigth',
            fontWeight: 600 ,
            flexGrow: 1,
            color: '#788d58'
        },

        thought: {
            fontSize: '1rem',
            textAlign: 'rigth',
            flexGrow: 1,
            fontWeight: 500,
            color: 'black'
        },

        addition: {
            fontSize: '1rem',
            textAlign: 'rigth',
            fontWeight: 400,
            color: '#9EB0A4'
        }
    },

    img: {
        width: '50%',
        height: '100%',
        objectFit: 'cover',
        objectPosition: '50% 40%',
        borderRadius: '0.3rem'
    }
};

export default mainDirectorStyle;
