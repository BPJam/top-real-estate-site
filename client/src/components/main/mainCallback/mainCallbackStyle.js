const mainCallbackStyle = {
    width: '100%',
    height: 'calc(100vh + 8rem)',
    backgroundColor: 'black',
    zIndex: 0,
    position: 'relative',

    imageWrapper: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1,
        objectFit: 'cover',
        opacity: 0.5,

        image: {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: '50% 60%'
        }
    },

    callbackContent: {
        display: 'flex',
        flexDirection: 'row',
        zIndex: 2,
        position: 'absolute',
        top: '6rem',
        bottom: '6rem',
        left: '6rem',
        right: '6rem',

        formSection: {
            width: '50%',
            padding: '0 2rem',

            wrapper: {
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '0.3rem' 
            },

            header: {
                height: '30%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',

                h1: {
                    textAlign: 'center',
                    fontSize: '1.8rem',
                    fontWeight: 600,
                    color: 'whitesmoke',
                    margin: '1rem 0'
                },

                p: {
                    fontSize: '1rem',
                    textAlign: 'center',
                    pl: '15%',
                    pr: '15%',
                    fontWeight: 500,
                    color: 'whitesmoke' 
                }
            },

            buttons: {
                height: '70%', 
                display: 'flex',
                flexDirection: 'column',

                row: {
                    height: '50%',
                    display: 'flex',
                    flexDirection: 'row',

                    cell: {
                        height: '100%',
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',

                        link: {
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: '10rem',
                            width: '10rem',
                            textDecoration: 'none',
                            color: 'inherit',
                            cursor: 'pointer',
                            
                            '&:hover': {
                                backgroundColor: 'rgba(0,0,0,0.3)',
                                borderRadius: '0.3rem'
                            }
                        },

                        text: {
                            cursor: 'pointer',
                            color: 'whitesmoke'
                        }
                    }
                }
            }
        },

        textSection: {
            width: '50%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',

            article: {
                display: 'flex',
                flexDirection: 'row',

                checkLogo: {
                    width: '3rem',
                    height: '3rem',
                    margin: '0 2rem'
                },

                h1: {
                    fontSize: '1.4rem',
                    fontWeight: 600,
                    color: 'whitesmoke',
                    marginBottom: '0.8rem'
                },

                p: {
                    fontSize: '1rem',
                    fontWeight: 500,
                    color: 'whitesmoke'
                }
            }
        }
    },

    logoImage: {
        width: '60px',
        height: '60px'
    }
};

export default mainCallbackStyle;
