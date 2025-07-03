import {Request, Response, NextFunction} from "express";

class UserManagementController {
    public register = async (req: Request, res: Response, next: NextFunction) => {
        console.log(req.body);
        res.send("yes");
    }
}

export default UserManagementController;
