import express from 'express';
const   Router = express.Router();
import {validationAuthenticator } from "../middlewares"
import studentRegister from '../controllers/student/register/post'
import studentLogin from '../controllers/student/login/post'
import getStudent from '../controllers/student/get/get'
import updateStudent from '../controllers/student/update/put'
import deleteStudent from '../controllers/student/delete/delete'

Router.get('/getStudent' ,validationAuthenticator(), getStudent())
Router.post('/studentRegister' , studentRegister())
Router.post('/studentLogin' , studentLogin())
Router.put('/updateStudent/:_id', updateStudent())
Router.delete('/deleteStudent/:_id', deleteStudent())


export default Router;