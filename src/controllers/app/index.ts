import express, { Router } from "express";
import apiRouter from "./api";
const appRouter: Router = express.Router();
appRouter.use("/api", apiRouter);
export default appRouter;