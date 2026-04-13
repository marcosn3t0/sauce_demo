import { Browser, chromium, firefox, webkit } from "@playwright/test";
import { env } from "../config/env";
/**
 * @function invokeBrowser - Retorna o Tipo de browser com base na string especificada
*/

export const invokeBrowser = async ():Promise<Browser> => {

    const brwowserType = process.env.npm_config_BROWSER !== undefined ? process.env.npm_config_BROWSER : env.browser;
    switch(brwowserType){
        case "chrome":
            return await chromium.launch({
                args: ["--start-maximized"]
            });
        case "firefox":
            return await firefox.launch({
                args: ["--start-maximized"]
            });
        case "webkit":
            return await webkit.launch({
                args: ["--start-maximized"]
            });
        default:
            throw new Error("Selecione um Browser");
    };

}