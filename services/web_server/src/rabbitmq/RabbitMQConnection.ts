import {ChannelModel, connect as rabbitConnect} from "amqplib";

class RabbitMQConnection {
    private static instance: RabbitMQConnection;
    public rabbitInstance: ChannelModel | null = null;

    private constructor() {
    }

    public static getInstance = async () => {
        if (!this.instance) {
            this.instance = new RabbitMQConnection();
            this.instance.rabbitInstance = await this.instance.connect();
        }

        return this.instance;
    }

    private connect = (uri?: string): Promise<ChannelModel> => {
        return new Promise(async (resolve, reject) => {
            try {
                const conn: ChannelModel = await rabbitConnect(uri || process.env.RABBIT_URI || "");
                console.log("✅ RabbitMQ is connected");

                resolve(conn);
            } catch (error) {
                console.error("❌ RabbitMQ connection error:", error);
                reject(error);
            }
        });
    }
}

export default RabbitMQConnection;
