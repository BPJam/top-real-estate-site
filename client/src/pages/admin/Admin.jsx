import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { adminLogin, fetchDataAdmin } from '../../redux/actions/actionCreator';
import { Alert, AlertTitle, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import './admin.css';
import $api from '../../http';

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
    }, []);

    useEffect(() => {
        setTimeout(() => {
            alertOpenHandler(false);
        }, 8000);
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
            window.location.reload();
        })
        .catch(error => {
            dispatch(adminLogin({}));
            window.location.reload();
        });
    }
    
    if (data.accessToken) {
        return (
            <div className='admin-page'>
                <h1>Привіт { data.admin.name }</h1>
                <br />
                <br />
                <button onClick={exitHandler}>Вийти</button>
            </div>
        );
    }

    return (
        <div className='admin-page'>
            <div>
                <input
                    type='text'
                    className='name'
                    name='name'
                    value={admin.name}
                    placeholder="Ім'я"
                    onChange={event => changeHandler(event)}
                />
                <br />
                <br />
                <input
                    type='password'
                    className='password'
                    name='password'
                    value={admin.password}
                    placeholder="Пароль"
                    onChange={event => changeHandler(event)}
                />
                <br />
                <br />
                <button
                    className='submit'
                    onClick={submitHandler}
                >
                    Увійти
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
    );
}



export default Admin;
