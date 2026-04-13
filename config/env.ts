import * as dotenv from "dotenv"
import * as path from 'path';

dotenv.config({
    override:true,
    path:path.resolve(__dirname,`.env.${process.env.ENV}`),
    quiet:true,
})

export const env = {
    baseUrl: process.env.BASEURL as string,
    environment: process.env.ENV,
    timeout: Number(process.env.TIMEOUT||35000),
    headless: process.env.HEADLESS === "true",
    browser: process.env.BROWSER,
    workers: Number(process.env.WORKERS),
    password: process.env.PASSWORD,
    username: process.env.USERNAME
}