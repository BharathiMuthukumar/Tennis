import express, { Router } from "express";
import UserController from "./user";
const apiRouter: Router = express.Router();
apiRouter.use("/user", UserController);

export default apiRouter;