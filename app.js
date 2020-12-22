const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const Client = require('pg').Client //const {Client} = require('pg');

const userRoutes = require('./api/routes/users');
const appointmentRoutes = require('./api/routes/appointments');




app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    next();
   /* if(req.method === 'OPTIONS'){
        Response.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }*/
   // next();
});


app.use('/users', userRoutes);
app.use('/appointments', appointmentRoutes);

app.use((req, res, next) => {
    const error = new Error('It is Not found');
    error.status = 404;
    next(error);
})

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;