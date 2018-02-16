import * as express from "express";
import * as helmet from "helmet";

const expressApp = express();

expressApp.use(helmet({
    frameguard: { action: "deny" },
    hidePoweredBy: { setTo: "PHP/7.0.23" },
}));

const baseAPIHandler = (req: express.Request, res: express.Response): void => {
    res.status(204);
    res.send();
};

expressApp.get("/", baseAPIHandler);

export default expressApp;
