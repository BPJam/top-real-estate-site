const mainHeaderStyle = {
    height: '100vh',
    width: '100%',

    wrapper: {
        border: 'none',
        boxShadow: 'none',
        backgroundColor: 'initial',
        height: '100%',
        width: '100%'
    },

    coverVideo: {
        zIndex: -2,
        backgroundColor: 'black',
        position: 'relative',
        height: '100%',
        width: '100%',

        video: {
            position: 'absolute',
            zIndex: -1,
            height: '100%',
            width: '100%',
            objectFit: 'cover',
            opacity: 0.5
        }
    },

    content: {
        zIndex: 1,
        display: 'flex',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',

        wrapper: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            maxWidth: '60vw',
            marginTop: '8.5rem'
        },

        h1: {
            textAlign: 'center',
            fontSize: '4rem',
            fontWeight: '600',
            marginBottom: '2rem'
        },

        p: {
            textAlign: 'center',
            fontSize: '1.3rem',
            fontWeight: '400',
            marginBottom: '2rem'
        },

        button: {
            backgroundColor: '#788d58',
            textTransform: 'none',
            boxShadow: 'initial',
            fontSize: '1.1rem',
            fontWeight: '500',
            height: '4rem',
            width: '11rem',
            borderRadius: '0.3rem',

            ':hover': {
                backgroundColor: '#788d58',
                WebkitBoxShadow: '0px 0px 0px 5px rgba(120,141,88,0.4)',
                MozBoxShadow: '0px 0px 0px 5px rgba(120,141,88,0.4)',
                boxShadow: '0px 0px 0px 5px rgba(120,141,88,0.4)',
                transition: 'all 0.3s ease-in-out',
                WebkitTransition: '0.3s all ease-in-out'
            }
        }
    },

    modal: {
        backgroundColor: 'rgba(0,0,0,0.8)',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        borderRadius: '0.3rem',

        partHeader: {
            backgroundColor: 'rgba(0,0,0,0)',
            color: 'whitesmoke',
            textAlign: 'center',
            cursor: 'default',
            fontSize: '0.9rem'
        },

        item: {
            '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.2)'
            },

            icon: {
                minWidth: 0,
                pr: 1,
                cursor: 'pointer'
            },

            text: {
                color: 'whitesmoke',
                
                '& > span': {
                    cursor: 'pointer'
                }
            }
        }
    },

    logoImage: {
        width: '27px',
        height: '27px'
    }
}

export default mainHeaderStyle;
