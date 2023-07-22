const mainCompanyInfoStyle = {
    width: '100%',
    height: 'calc(100vh + 12rem)',
    padding: '6rem',

    wrapper: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        paddingTop: '2rem',
        paddingBottom: '2.5rem'
    },

    text: {
        width: '50%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',

        h1: {
            lineHeight: 'initial',
            fontSize: '2.8rem',
            fontWeight: 500,
            color: '#788d58',
            paddingTop: '1rem'
        },

        paragraphs: {
            display: 'flex',
            flexDirection: 'column',
            flexGrow: '1',
            height: '65%',
            width: '80%',
            justifyContent: 'space-around',
            
            '& > p': {
                fontWeight: 500,
                fontSize: '1rem',

                ':first-letter': {
                    fontWeight: 600,
                    fontSize: '1.3rem'
                }
            }
        }
    },

    img: {
        width: '50%',
        height: '100%',
        objectFit: 'cover',
        objectPosition: 'bottom',
        borderRadius: '0.3rem'
    }
};

export default mainCompanyInfoStyle
