import React, { useEffect, useState } from 'react';
import $api from '../../http';
import './admin.css';
import { useDispatch, useSelector } from 'react-redux';
import { adminLogin, fetchDataAdmin, reloadCurrentShowAdminPanel, reloadStateAdminPanel, reloadTypeCellAdminPanel } from '../../redux/actions/actionCreator';
import { Alert, AlertTitle, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import AdminPanel from './AdminPanel';

function Admin() {
    const [admin, setAdmin] = useState({
        name: '',
        password: ''
    });

    const adminData = useSelector(state => state?.loginAdmin?.data);
    const data = useSelector(state => state?.response?.data);
    
    const [open, setOpen] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        $api.get('/admin-refresh')
        .then(data => {
            dispatch(fetchDataAdmin(data.data));
        })
        .catch(error => {
            dispatch(fetchDataAdmin(error.response));
        });
    // eslint-disable-next-line
    }, []);

    useEffect(() => {
        setTimeout(() => {
            alertOpenHandler(false);
        }, 8000);
    // eslint-disable-next-line
    }, [])

    const changeHandler = (event) => {
        setAdmin({ ...admin, [event.target.name]: event.target.value });
    }

    const alertOpenHandler = (action) => setOpen(action);

    const submitHandler = async () => {
        await $api.post('/admin-login', admin)
        .then(data => {
            dispatch(adminLogin(data.data));
            window.location.reload();
        })
        .catch(error => {
            setOpen(true);
            dispatch(adminLogin(error.response));
        });
    }

    const exitHandler = async () => {
        await $api.post('/admin-logout', {})
        .then(() => {
            dispatch(adminLogin({}));
            dispatch(reloadStateAdminPanel());
            dispatch(reloadCurrentShowAdminPanel());
            dispatch(reloadTypeCellAdminPanel());
            window.location.reload();
        })
        .catch(error => {
            dispatch(adminLogin({}));
            dispatch(reloadStateAdminPanel());
            dispatch(reloadCurrentShowAdminPanel());
            dispatch(reloadTypeCellAdminPanel());
            window.location.reload();
        });
    }
    
    if (data.accessToken) {
        return (
            <div className='admin-page-logged'>
                <div className='ap-header'>
                    <h1>Aдмін панель</h1>
                    <div className="exit">
                        { data.admin.name }
                        
                        <button onClick={exitHandler}>
                            <img width="32" height="32" src="https://img.icons8.com/ios/100/exit--v2.png" alt="exit--v2"/>
                        </button>
                    </div>
                </div>
                
                <AdminPanel />
            </div>
        );
    }

    return (
        <div className='admin-page'>
            <div className='login'>
                <div className='form'>
                    <div className="form-item">
                        <input
                            type='text'
                            className='name'
                            name='name'
                            id='name'
                            value={admin.name}
                            placeholder="Viktoriia"
                            onChange={event => changeHandler(event)}
                        />
                        <label htmlFor='name'>Ім'я</label>
                    </div>

                    <div className="form-item">
                        <input
                            type='password'
                            className='password'
                            name='password'
                            id='password'
                            value={admin.password}
                            placeholder="*******"
                            onChange={event => changeHandler(event)}
                        />
                        <label htmlFor='password'>Пароль</label>
                    </div>

                    <button
                        className='submit'
                        onClick={submitHandler}
                    >
                        УВІЙТИ
                    </button>

                    {
                        open ?
                            <Alert
                                sx={{
                                    position: 'absolute',
                                    width: '30%',
                                    top: '3rem',
                                    right: '3rem'
                                }}
                                severity="error"
                                action={
                                    <IconButton
                                        aria-label="close"
                                        color="inherit"
                                        size="small"
                                        onClick={() => {
                                            alertOpenHandler(false);
                                        }}
                                    >
                                        <CloseIcon fontSize="inherit" />
                                    </IconButton>
                                }
                                
                            >
                                <AlertTitle>Error</AlertTitle>

                                { adminData.message ? adminData.message : '' }
                            </Alert>
                        :
                            <></>
                    }
                    
                </div>
            </div>
        </div>
    );
}



export default Admin;
