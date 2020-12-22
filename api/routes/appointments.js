const express = require('express');
const router = express.Router();
const Database = require('../../database');

var postgres = new Database();

router.get('/vehicles', (req, res, next) => {
    debugger;

    const functionName = "fleetmanager.fn_get_all_vehicles";

    return new Promise((resolve, reject) => {

        postgres.callFnWithResults(functionName)
            .then((data) => {
                debugger;
                console.log(data);
                res.status(200).json({
                    message: 'Handling GET requests to /vehicles',
                    vehicles: data,
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


router.get('/:userId', (req, res, next) => {

    const functionName = "mychat.fn_users_getbyid"+"("+req.params.userId+")";

    return new Promise((resolve, reject) => {

        postgres.callFnWithResultsById(functionName)  //postgres.callFnWithResultsById(functionName, id)
            .then((data) => {
                debugger;
                console.log(data);
                res.status(200).json({
                    message: 'You dicovered the ID',
                    chatuser: data,
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


router.post('/addAppointment', (req, res, next) => {
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

        const functionName = `fleetmanager.fn_add_appointment`;

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

router.post('/inspection', (req, res, next) => {
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

        const functionName = `fleetmanager.fn_add_inspection`;

        const sql = `${functionName}(${placeholder})`;

       
        postgres.callFnWithResultsAdd(sql, paramsvalues)
        .then((data) => {
            debugger;
            console.log(data);
   
            res.status(201).json({
                message: 'Newly inspected vehicle',
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


router.patch('/cancel/:id', (req, res, next) => {
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

        const functionName = `fleetmanager.fn_cancel_appointment`;

        const sql = `${functionName}(${placeholder})`;

        postgres.callFnWithResultsAdd(sql, paramsvalues)
        .then((data) => {
            debugger;
            console.log(data);
   
            res.status(201).json({
                message: 'Appointment cancelled successfully',
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

router.patch('/clientcancel/:number/:registration', (req, res, next) => {
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

        const functionName = `fleetmanager.fn_client_cancel_appointment`;

        const sql = `${functionName}(${placeholder})`;

      
        postgres.callFnWithResultsAdd(sql, paramsvalues)
        .then((data) => {
            debugger;
            console.log(data);
   
            res.status(201).json({
                message: 'Appointment cancelled successfully',
                cancelled: data
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


router.patch('/attendappointment/:registration', (req, res, next) => {
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

        const functionName = `fleetmanager.fn_attend_appointment`;

        const sql = `${functionName}(${placeholder})`;
 
        postgres.callFnWithResultsAdd(sql, paramsvalues)
        .then((data) => {
            debugger;
            console.log(data);
   
            res.status(201).json({
                message: 'Appointment attended successfully',
                cancelled: data
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


router.get('/clientappointments/:number', (req, res, next) => {
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

        const functionName = `fleetmanager.fn_get_client_appointments`;

        const sql = `${functionName}(${placeholder})`;

     
        postgres.callFnWithResultsAdd(sql, paramsvalues)
        .then((data) => {
            debugger;
            console.log(data);
   
            res.status(201).json({
                message: 'appointments returned successfully successful',
                appointments: data
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

router.get('/clientvehicles/:number', (req, res, next) => {
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

        const functionName = `fleetmanager.fn_get_client_vehicles`;

        const sql = `${functionName}(${placeholder})`;

        postgres.callFnWithResultsAdd(sql, paramsvalues)
        .then((data) => {
            debugger;
            console.log(data);
   
            res.status(201).json({
                message: 'appointments returned successfully',
                vehicles: data
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

router.get('/', (req, res, next) => {
    debugger;

    const functionName = "fleetmanager.fn_get_all_appointments";

    return new Promise((resolve, reject) => {

        postgres.callFnWithResults(functionName)
            .then((data) => {
                debugger;
                console.log(data);
                res.status(200).json({
                    message: 'Handling GET requests to /appointments',
                    appointments: data,
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

router.get('/checkvehicle/:number/:registration', (req, res, next) => {
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

        const functionName = `fleetmanager.fn_client_plate_number_exists`;

        const sql = `${functionName}(${placeholder})`;

        postgres.callFnWithResultsAdd(sql, paramsvalues)
        .then((data) => {
            debugger;
            console.log(data);
   
            res.status(201).json({
                message: ' Vehicle registration number exists',
                vehiclereg: data
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

router.get('/checkregnum/:registration', (req, res, next) => {
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

        const functionName = `fleetmanager.fn_vehicle_number_exists`;

        const sql = `${functionName}(${placeholder})`;

        // const funcionName = `mychat.fn_add_users($1,$2)`

        // callFnWithResultsAdd(sql, paramsvalues)


        // req.body.added_by = parseInt(req.body.added_by); 
        postgres.callFnWithResultsAdd(sql, paramsvalues)
        .then((data) => {
            debugger;
            console.log(data);
   
            res.status(201).json({
                message: ' Vehicle registration number exists',
                vehiclereg: data
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