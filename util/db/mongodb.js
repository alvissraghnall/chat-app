import { MongoClient } from "mongodb";

const MONGO_URI = process.env.MONGO_URI;
const dev = process.env.NODE_ENV;

const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};

let client;
let clientPromise;

if (!MONGO_URI) {
    throw new Error("Please add mongo URI to environmental variables");
}

if (dev === 'development') {
    if (!global._mongoClientPromise) {
        client = new MongoClient(MONGO_URI, options);
        global._mongoClientPromise = client.connect();
    }
    clientPromise = global._mongoClientPromise;
} else {
    client = new MongoClient(MONGO_URI, options);
    clientPromise = client.connect();
}

export default clientPromise;