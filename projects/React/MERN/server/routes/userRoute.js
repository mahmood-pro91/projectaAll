import express from 'express';
import {createUser, getAllUsers} from '../controller/userController.js';

const route = express.Router();

route.post("/user", createUser);



export default route;