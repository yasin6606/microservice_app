import mongoose, {Mongoose, ConnectOptions} from "mongoose";

class MongoDBConnection {
    private static instance: MongoDBConnection;
    public mongooseInstance: Mongoose | null = null;
    private mongooseOpt: ConnectOptions = {dbName: process.env.MongoDBName};

    private constructor() {
    }

    public static getInstance = async (): Promise<MongoDBConnection> => {
        if (!this.instance) {
            this.instance = new MongoDBConnection();
            this.instance.mongooseInstance = await this.instance.connect();
        }

        return this.instance;
    }

    private async connect(uri?: string): Promise<Mongoose | null> {
        return new Promise(async (resolve, reject) => {
            const mongoUri = uri || process.env.MONGODB_URI;
            if (!mongoUri) throw new Error("MongoDB URI is not provided.");

            try {
                const conn: Mongoose = await mongoose.connect(mongoUri, this.mongooseOpt);
                console.info("✅ MongoDB is connected");

                resolve(conn);
            } catch (error) {
                console.error("❌ MongoDB connection error:", error);
                reject(error);
            }
        });
    }
}

export default MongoDBConnection;
