const express = require('express');
const router = express.Router();
const Database = require('../../database');

var postgres = new Database();

router.get('/', (req, res, next) => {
    debugger;

    const functionName = "fleetmanager.fn_getall_users";

    return new Promise((resolve, reject) => {

        postgres.callFnWithResults(functionName)
            .then((data) => {
                debugger;
                console.log(data);
                res.status(200).json({
                    message: 'Handling GET requests to /users',
                    chatusers: data,
                    status: true
                });
                resolve(data);

            })
            .catch((error => {
                debugger;
                console.log(error);
                res.status(500).json({
                    message: 'bad Request',
                    error: error,
                    status: false
                });
                reject(error);
            }))

    })
});

router.get('/:userNumber', (req, res, next) => {

    const functionName = "fleetmanager.fn_users_getby_number"+"("+req.params.userNumber+")";

    return new Promise((resolve, reject) => {

        postgres.callFnWithResultsById(functionName)
            .then((data) => {
                debugger;
                
                res.status(200).json({
                    message: 'You dicovered the ID',
                    usernumber: data,
                    status: true
                });
                resolve(data);

            })
            .catch((error => {
                debugger;
                console.log(error);
                res.status(500).json({
                    message: 'bad Request',
                    error: error,
                    status: false
                });
                reject(error);
            }))

    })


});

router.post('/register', (req, res, next) => {
    debugger;
    return new Promise((resolve, reject) => {
        let placeholder = '';
        let count = 1;
        const params = Object.keys(req.body).map(key => [(key), req.body[key]]);

        const paramsvalues = Object.keys(req.body).map(key => req.body[key]);

        if (Array.isArray(params)) {
            params.forEach(() => {
                placeholder += `$${count},`;
                count += 1;
            });
        } 

        placeholder = placeholder.replace(/,\s*$/, ''); 

        const functionName = `fleetmanager.fn_user_registration`;

        const sql = `${functionName}(${placeholder})`;

        postgres.callFnWithResultsAdd(sql, paramsvalues)
        .then((data) => {
            debugger;
            console.log(data);
   
            res.status(201).json({
                message: 'Newly Added user',
                addedUser: data
            });
            resolve(data);

        })
        .catch((error) => {
            debugger;
            console.log(error);
            res.status(500).json({
                message: 'bad Request',
                error: error,
                status: false
            });
            reject(error);
        })
    })
});


router.get('/login/:number/:password', (req, res, next) => {
    debugger;
    return new Promise((resolve, reject) => {
        let placeholder = '';
        let count = 1;
        const params = Object.keys(req.params).map(key => [(key), req.params[key]]);

        const paramsvalues = Object.keys(req.params).map(key => req.params[key]);

        if (Array.isArray(params)) {
            params.forEach(() => {
                placeholder += `$${count},`;
                count += 1;
            });
        } 

        placeholder = placeholder.replace(/,\s*$/, ''); 

        const functionName = `fleetmanager.fn_users_login`;

        const sql = `${functionName}(${placeholder})`;

        
        postgres.callFnWithResultsAdd(sql, paramsvalues)
        .then((data) => {
            debugger;
            console.log(data);
   
            res.status(201).json({
                message: 'Login attempt successful',
                addedUser: data
            });
            resolve(data);

        })
        .catch((error) => {
            debugger;
            console.log(error);
            res.status(500).json({
                message: 'bad Request',
                error: error,
                status: false
            });
            reject(error);
        })
    })
});


router.get('/isTechnician/:number', (req, res, next) => {
    debugger;
    return new Promise((resolve, reject) => {
        let placeholder = '';
        let count = 1;
        const params = Object.keys(req.params).map(key => [(key), req.params[key]]);

        const paramsvalues = Object.keys(req.params).map(key => req.params[key]);

        if (Array.isArray(params)) {
            params.forEach(() => {
                placeholder += `$${count},`;
                count += 1;
            });
        } 

        placeholder = placeholder.replace(/,\s*$/, ''); 

        const functionName = `fleetmanager.fn_user_is_technician`;

        const sql = `${functionName}(${placeholder})`;

        postgres.callFnWithResultsAdd(sql, paramsvalues)
        .then((data) => {
            debugger;
            console.log(data);
   
            res.status(201).json({
                message: 'technician check is successful',
                istechnician: data
            });
            resolve(data);

        })
        .catch((error) => {
            debugger;
            console.log(error);
            res.status(500).json({
                message: 'bad Request',
                error: error,
                status: false
            });
            reject(error);
        })
    })
});


router.get('/checkNumber/:number/:id_number', (req, res, next) => {
    debugger;
    return new Promise((resolve, reject) => {
        let placeholder = '';
        let count = 1;
        const params = Object.keys(req.params).map(key => [(key), req.params[key]]);

        const paramsvalues = Object.keys(req.params).map(key => req.params[key]);

        if (Array.isArray(params)) {
            params.forEach(() => {
                placeholder += `$${count},`;
                count += 1;
            });
        } 

        placeholder = placeholder.replace(/,\s*$/, ''); 

        const functionName = `fleetmanager.fn_register_number_exists`;

        const sql = `${functionName}(${placeholder})`;

        
        postgres.callFnWithResultsAdd(sql, paramsvalues)
        .then((data) => {
            debugger;
            console.log(data);
   
            res.status(201).json({
                message: ' Id number and phone number do not exist',
                numbercheck: data
            });
            resolve(data);

        })
        .catch((error) => {
            debugger;
            console.log(error);
            res.status(500).json({
                message: 'bad Request',
                error: error,
                status: false
            });
            reject(error);
        })
    })
});


module.exports = router;