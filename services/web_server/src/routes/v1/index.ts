import {Router} from "express";
import userManagementRouter from "./userManagement/userManagement.route";

const v1Route: Router = Router({caseSensitive: true});

v1Route.post("/user", userManagementRouter);

export default v1Route;
