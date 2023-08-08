import express from 'express';
const   Router = express.Router();
import {validationAuthenticator } from "../middlewares"
import userRegister from '../controllers/user/register'
import userLogin from '../controllers/user/login'
import getUser from '../controllers/user/get'
import updateUser from '../controllers/user/put'
import deleteUser from '../controllers/user/delete'

Router.get('/getUser' ,validationAuthenticator(), getUser())
Router.post('/userRegister' , userRegister())
Router.post('/userLogin' , userLogin())
Router.put('/updateUser/:_id', updateUser())
Router.delete('/deleteUser/:_id', deleteUser())


export default Router;