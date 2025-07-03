import {ErrorCode} from "../types/error.types";

export interface ErrorsDetails {
    code: ErrorCode;
    message: string;
    details?: Record<string, any>;
}

export interface ErrorList {
    statusCode: number;
    errorType: ErrorCode;
    title?: string;
    timestamp: Date;
}
