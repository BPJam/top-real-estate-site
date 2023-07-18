const upButonStyle = {
    position: 'fixed',
    zIndex: 9999,
    bottom: '40px',
    right: '40px',
    display: 'flex',
    width: '80px',
    height: '80px',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',

    ':hover': {
        transform: 'scale(1.3)',
        transition: 'transform ease-in-out .3s',
        background: 'initial'
    },
    
    icon: {
        width: '40px',
        height: '40px',
        color: '#788d58'
    },
    
    text: {
        fontSize: '0.8rem',
        color: '#788d58'
    }
};

export default upButonStyle;
