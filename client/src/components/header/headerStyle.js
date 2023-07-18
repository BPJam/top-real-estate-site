const headerStyle = {
    globalHeader: {
        position: 'absolute',
        display: 'flex',
        flexDirection: 'row',
        background: 'none',
        width: '100%',
        padding: '1.5rem 6rem',
        alignItems: 'center',
        zIndex: 999,

        logoWrapper: {
            minWidth: '3.8rem',
            minHeight: '3.8rem',
            maxWidth: '3.8rem',
            maxHeight: '3.8rem',
            borderRadius: '100%',
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
                            color: 'whitesmoke',
                            cursor: 'pointer'
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
                        flexDirection: 'column',
                        cursor: 'pointer'
                    },

                    '& > div > div > span': {
                        fontWeight: 500,
                        color: 'whitesmoke',
                        cursor: 'pointer'
                    },

                    '& > a > div > span': {
                        fontWeight: 500,
                        color: 'whitesmoke',
                        cursor: 'pointer'
                    },

                    '& > div > svg': {
                        color: 'whitesmoke',
                        cursor: 'pointer'
                    }
                }
            }
        }
    }
}

export default headerStyle;
