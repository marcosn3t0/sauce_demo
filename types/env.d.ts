export {}

declare global{
    namespace NodeJS{
        interface ProcessEnv{
            BASEURL:string;
            ENV: "stg" | "dev" | "qa",
            TIMEOUT:string;
            HEADLESS:string;
            BROWSER: "chrome" | "firefox" | "webkit";
            WORKERS:string;
            username:string;
            password:string;
        }
    }
}