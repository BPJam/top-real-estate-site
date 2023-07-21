const mainFAQStyle = {
    width: '100%',
    minHeight: 'calc(100vh + 12rem)',
    padding: '6rem',

    wrapper: {
        width: '100%',
        minHeight: 'calc(100vh + 6rem)',
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
        width: '60%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        flexGrow: 1,
        flexWrap: 'wrap',
        
        '& > div:not(:nth-of-type(even))': {
            borderTop: '1px solid #9D9B9B',
            borderBottom: '1px solid #9D9B9B'
        },
        
        '& > div:last-child': {
            borderBottom: '1px solid #9D9B9B'
        },

        item: {
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            padding: '1rem 0.5rem',
            flexGrow: 1,
            
            '&:hover': {
                backgroundColor: '#e0e0e0'
            },

            p: {
                fontWeight: '500'
            },

            icon: {
                width: '3rem',
                height: '3rem',
                cursor: 'pointer'
            },

            collapse: {
                width: '100%',

                content: {
                    '& .MuiListItem-root': {
                        padding: 0
                    }
                }
            }
        }
    }
}

export default mainFAQStyle;
