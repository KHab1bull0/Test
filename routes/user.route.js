import { Router } from "express";
import { createOne, getOne } from "../controllers/user.controller.js";

const userRoute = Router();

userRoute.get('/user', getOne);
userRoute.post('/user', createOne);

export default {
    userRoute
};