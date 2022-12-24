import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    image: String,

    emailVerified: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

export default userSchema;