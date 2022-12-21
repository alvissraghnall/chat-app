import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;

export const connectDB = handler => async (req, res) => {
    if (mongoose.connections[0].readyState) {
        return handler(req, res);
    }

    await mongoose.connect(MONGO_URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });

    return handler(req, res);
}

let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null }
}

export async function conn () {
    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        const opts = {
            bufferCommands: false,
            useNewUrlParser: true, 

            useUnifiedTopology: true 
        }

        cached.promise = mongoose.connect(MONGO_URI, opts).then(mongoose => mongoose);

    }

    cached.conn = await cached.promise;
    return cached.conn;
}