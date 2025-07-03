import express, {Express, Request, Response} from "express";
import cors from "cors";
import bodyParser from "body-parser";
import routesSource from "./routes";
import RabbitMQConnection from "./rabbitmq/RabbitMQConnection";
import MongoDBConnection from "./mongoDB/MongoDBConnection";
import "dotenv/config.js"

class WebServer {
    private app: Express | undefined;

    public constructor() {
        this.inits();
        this.serverInit();
        this.setRoutes();
        this.setRabbit();
        this.setMongo();
    }

    private inits = () => {
        this.app = express();
        this.app.use(cors());
        this.app.use(bodyParser.urlencoded({extended: true}));
        this.app.use(bodyParser.json());
    }

    private serverInit = () => {
        this.app && this.app.listen(process.env.WEB_SERVER_PORT || 5000, () => {
            console.log(`✅ Server is running on Port: ${process.env.WEB_SERVER_PORT}`);
        });
    }

    private setRoutes = () => {
        this.app?.use("/api", routesSource);
        // this.app?.use("*", (req: Request, res: Response) => {
        //     console.warn(`404 Not Found: ${req.method} ${req.originalUrl}`);
        //     res.status(404).json({
        //         status: 404,
        //         message: "Route not found",
        //         method: req.method,
        //         path: req.originalUrl,
        //     });
        // });
    }

    private setMongo = async () => {
        await MongoDBConnection.getInstance();
    }

    private setRabbit = async () => {
        await RabbitMQConnection.getInstance();
    }
}

export default WebServer;
