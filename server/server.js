const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const { Database } = require('./database');
const router = require('./router');
const errorMiddleware = require('./middlewares/error-middleware');
require('dotenv').config();

const SERVER_PORT = process.env.SERVER_PORT || 5000;
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: 'http://192.168.0.108:3000',
    credentials: true,
    optionSuccessStatus:200
}));
app.use('/api', router);
app.use(errorMiddleware);

const start = async() => {
    try {
        await Database();
        app.listen(SERVER_PORT, () => console.log(`Server listening port ${SERVER_PORT}...`));
    } catch (e) {
        console.log(e);
    }
}

start();
