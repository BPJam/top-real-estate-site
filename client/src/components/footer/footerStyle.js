const footerStyle = {
    width: '100%',
    height: 'calc(60vh + 6rem)',
    position: 'relative',

    wrapper: {
        height: '75%',
        padding: '6rem' 
    },

    companyInfo: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: '100%',

        mainInfo: {
            width: '55%',
    
            logo: {
                minWidth: '5rem',
                minHeight: '5rem',
                maxWidth: '5rem',
                maxHeight: '5rem',
                borderRadius: '100%',
                overflow: 'hidden',
                marginBottom: '1rem'
            },
    
            label: {
                fontSize: '1.2rem',
                fonrWeight: '600' 
            }
        },

        layerInfo: {
            display: 'flex',
            flexDirection: 'row',
            width: '45%',

            section: {
                width: '50%',
                display: 'flex',
                flexDirection: 'column',

                title: {
                    fontSize: '1.4rem',
                    color: '#788d58',
                    fontWeight: '600',
                    marginBottom: '1rem'
                },

                paragraph: {
                    flexGrow: 1,
                    cursor: 'pointer',
                    
                    '&:hover': {
                        textDecoration:'underline'
                    }
                },

                contact: {
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'row !important',
                    alignItems: 'top',
                    justifyContent: 'start',
                    textDecoration: 'none',
                    color: 'inherit',
                    width: '100% !important',

                    title: {
                        cursor: 'pointer',

                        '&:hover': {
                            textDecoration:'underline'
                        }
                    }
                },

                placeIcon: {
                    width: '20px',
                    height: '20px',
                    marginRight: '0.3rem'
                }
            }
        }
    },

    developer: {
        height: '25%',
        backgroundColor: 'black',
        display: 'flex',
        flexDirection:'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingTop: '1rem',

        nameOfKing: {
            color: 'whitesmoke',
            textAlign: 'center',
            fontSize: '0.8rem',

            firstLast: {
                color: 'whitesmoke',
                fontSize: '0.9rem',
                cursor: 'pointer',
                textAlign: 'center',

                ':hover': {
                    textDecoration: 'underline'
                }
            }
        },

        copyright: {
            color: 'whitesmoke',
            fontSize: '0.8rem'
        }
    },

    logoImage: {
        width: '20px',
        height: '20px',
        marginRight: '0.3rem' 
    }
};

export default footerStyle;
