// importing external modules
import dotEnv from "dotenv";

//intilizing env variables
dotEnv.config();
const ENV = process.env;


export const SERVER_CONFIG = {
    PORT: ENV.SERVER_CONFIG_PORT || 2400,
    HOST: ENV.SERVER_CONFIG_HOST || "localhost",
}

export const DB_CONFIG = {
    PORT: ENV.DB_CONFIG_PORT || 3306,
    HOST: ENV.DB_CONFIG_HOST || "localhost",
    DIALECT: ENV.DB_CONFIG_DILECT || "mysql",
    USER_NAME: ENV.DB_CONFIG_USER_NAME || "root",
    PASSWORD: ENV.DB_CONFIG_PASSWORD || "phpMyAdmin@80",
    DATABASE: ENV.DB_CONFIG_DATABASE || "keep_task_track",
}

export const RESPONSE_CODES = {
    SUCCESS: 200,
    CREATED: 201,
    BAD_REQUEST: 400,
    NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500,
}

export const RESPONSE_STATUS_TEXT = {
    200: "Seccess",
    201: "Created",
    400: "Bad Request",
    404: "Not Found",
    500: "Internal Server Error",
}

export const RESPONSE_MESSAGES = {
    SUCCESS_DEFAULT: "Successfull!",
    ERROR_DEFAULT: "Something went wrong!",
    NOT_FOUND:"Method not found!",
    TASK:{
        CREATED:"New Task Added successfully"
    }
}