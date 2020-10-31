import { mongoose } from "@typegoose/typegoose";
require("dotenv").config("../env");

/**
 * @description Function that provides MongoDB Connection
 */
export default async function mongoConnection() {
    const CONNECTION_URL = `mongodb+srv://${process.env.MONGO_URL}/${process.env.MONGO_NAME}`;

    // Make a mongo connection and return it
    return mongoose.connect(CONNECTION_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
}
