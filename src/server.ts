import express, {Request, Response, NextFunction} from 'express';
import {PORT} from "./config/libConfig.ts";
import {libRouter} from "./routes/libRouter.ts";
import {errorHandler} from "./errorHandler/errorHandler.ts";

export const launchServer = () => {
    const app = express();
    app.listen(PORT, () => console.log(`Server runs at http://localhost:${PORT}`));

    //MIDDLEWARE
    app.use(express.json()); // parse stream into json

    //ROUTER
    app.use('/api', libRouter);
    app.use((req: Request, res: Response) => {
        res.status(404).send("Page not found")
    });

    //ERROR HANDLER
    app.use(errorHandler);

};