import React from 'react';

import { io } from 'socket.io-client'

import './admin.css';
// eslint-disable-next-line
const socket = io('http://localhost:5000/');

function Admin() {
    return (
        <div className='admin-page'>
            <form>
                <input type='text' className='email' />
                <br />
                <br />
                <input type='password' className='password' />
                <br />
                <br />
                <button type='submit' className='submit'>ADD</button>
            </form>
        </div>
    );
}

export default Admin;
