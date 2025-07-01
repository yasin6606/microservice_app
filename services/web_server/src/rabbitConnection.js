const amqp = require('amqplib');

class RabbitConnection {
    connect = () => {
        return new Promise(async (resolve, reject) => {
            console.log(process.env.RABBIT_URI)
            const conn = await amqp.connect(process.env.RABBIT_URI);
            // const conn = await amqp.connect("amqp://rabbit:5672");

            conn.on('error', err => reject(err));

            console.log(`RabbitMQ Successfully Connected On ${process.env.RABBIT_URI}`.cyan);
            resolve(conn);
        })
    };

    initRabbitConnection = async () => {
        try {
            this.rabbitConnectionObject = await this.connect();
        } catch (err) {
            console.log(err);
        }
    };

    getRabbitConnection = async () => {
        if (!this.rabbitConnectionObject)
            await this.initRabbitConnection();

        return this.rabbitConnectionObject;
    };
}

module.exports = RabbitConnection
