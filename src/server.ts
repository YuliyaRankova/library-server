import express from "express";
import {PORT, URL} from "./config/libConfig.ts";
import {libRouter} from "./routes/libRouter.ts";
import {errorHandler} from "./errorHandler/errorHandler.ts";

export const launchServer = () => {
    const app = express();
    app.listen(PORT, () => console.log(`Server runs at ` + URL + PORT));

    //MIDDLEWARE
    app.use(express.json); // parse stream into json

    //ROUTER
    app.use('/api', libRouter);
    app.use((req, res) => {
        res.status(404).send("Page not found")
    });

    //ERROR HANDLER
    app.use(errorHandler);

};