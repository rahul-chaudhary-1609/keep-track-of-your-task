// importing external modules
import dotEnv from "dotenv";

//intilizing env variables
dotEnv.config();
const ENV = process.env;


export const SERVER_CONFIG = {
    PORT: ENV.SERVER_CONFIG_PORT || 2400,
    HOST: ENV.SERVER_CONFIG_HOST || "localhost",
}