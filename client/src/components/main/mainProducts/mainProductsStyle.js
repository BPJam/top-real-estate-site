const mainProductsStyle = {
    width: '100%',
    minHeight: 'calc(100vh + 12rem)',
    padding: '6rem',
    backgroundColor: '#F1EEEE',

    wrapper: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },

    text: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        mb: '3rem',

        h1: {
            textAlign: 'center',
            fontSize: '2.8rem',
            fontWeight: 500,
            color: '#788d58',
            mb: '2rem'
        },

        p: {
            fontSize: '1.1rem',
            textAlign: 'center',
            pl: '15%',
            pr: '15%',
            fontWeight: 500
        }
    },

    items: {
        width: '100%',

        item: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '2rem',
            borderRadius: '0.3rem',
            
            '&:hover': {
                backgroundColor: '#e0e0e0'
            },

            img: {
                width: '6rem',
                height: '6rem',
                mb: '1.5rem'
            },

            h2: {
                fontWeight: 500,
                mb: '1rem',
                fontSize: '1.3rem'
            },

            p: {
                textAlign: 'center',
                fontSize: '0.95rem'
            }
        }
    }
};

export default mainProductsStyle;
