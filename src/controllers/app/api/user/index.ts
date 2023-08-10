import express from 'express';
const   Router = express.Router();
import {validationAuthenticator } from "@middlewares"
import userRegister from '@src/controllers/app/api/user/userRegister/post'
import userLogin from '@src/controllers/app/api/user/userLogin/post'
import getUser from '@src/controllers/app/api/user/getUser/get'
import updateUser from '@src/controllers/app/api/user/updateUser/put'
import deleteUser from '@src/controllers/app/api/user/deleteUser/delete'

Router.get('/getUser' ,validationAuthenticator(), getUser())
Router.post('/userRegister' , userRegister())
Router.post('/userLogin' , userLogin())
Router.put('/updateUser/:_id', updateUser())
Router.delete('/deleteUser/:_id', deleteUser())


export default Router;