import {Router} from "express";
import UserManagementController from "../../../../controllers/userManagement/UserManagement.controller";

const userManagementRouter = Router({caseSensitive: true});
const controller: UserManagementController = new UserManagementController();

userManagementRouter.post("/register", controller.register);

export default userManagementRouter;
