const usercontroller = require('../controllers/userinfo')

const express = require('express');

const rout = express.Router();

rout.post('/expensend',usercontroller.postdata);

rout.get('/expendata',usercontroller.getuser);

rout.delete('/deleteexpen/:id',usercontroller.deleteuser);

module.exports = rout;