import {ErrorList} from "../interfaces/error.interface";

const errorsList: ErrorList = {
    statusCode: 409,
    errorType: "ALREADY_EXISTS",
    title: "the username is already existed",
    timestamp: new Date()
}

export default errorsList;
