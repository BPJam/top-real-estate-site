const headerStyle = {
    globalHeader: {
        position: 'absolute',
        display: 'flex',
        flexDirection: 'row',
        background: 'none',
        width: '100%',
        padding: '1.5rem 6em',
        alignItems: 'center',
        zIndex: 999,

        logoWrapper: {
            minWidth: '3.5rem',
            minHeight: '3.5rem',
            maxWidth: '3.5rem',
            maxHeight: '3.5rem',
            borderRadius: '100%',
            border: '5px solid #788d58',
            backgroundColor: '#fff',
            overflow: 'hidden',
            cursor: 'pointer',

            '& > img': {
                width: '100%',
                height: '100%',
                objectFit: 'contain'
            }
        },
        nav: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
            alignItems: 'center',
            marginLeft: '1rem',

            menu: {
                display: 'flex',
                flexDirection: 'row',

                item: {
                    width: 'auto',

                    '& > a': {
                        color: 'black',
                        textDecoration: 'none',
                        cursor: 'pointer',

                        '& > div > span': {
                            fontWeight: 500,
                            color: 'whitesmoke'
                        }
                    }
                }
            },
            contacts: {
                display: 'flex',
                flexDirection: 'row',

                item: {
                    width: 'auto',
                    textDecoration: 'none',
                    color: 'black',

                    '&:first-of-type': {
                        display: 'flex',
                        flexDirection: 'column'
                    },

                    '& > div > div > span': {
                        fontWeight: 500,
                        color: 'whitesmoke'
                    },

                    '& > a > div > span': {
                        fontWeight: 500,
                        color: 'whitesmoke'
                    },

                    '& > div > svg': {
                        color: 'whitesmoke'
                    }
                }
            }
        }
    }
}

export default headerStyle;
