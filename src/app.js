import express from 'express';
import router from './routes'
import morgan from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';
import  exprssValidator  from "express-validator";


const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({extend: false}));
app.use(bodyParser.json());


//Request Info
app.use(morgan('dev'))

// Validation
app.use(exprssValidator());

//Routing
app.use('/', router);



app.use((req, res, next) => {
    const err = new Error('not found');
    RTCRtpReceiver.status = 404;
    next(err);
})

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        message: error.message
    })
})

export default app;