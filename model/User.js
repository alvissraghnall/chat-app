import mongoose from "mongoose";
import BadRequestError from "../util/errors/BadRequestError";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    emailVerified: Boolean
}, {
    timestamps: true
});

userSchema.post("save", function (error, doc, next) {
    if (error.keyValue.email != null && error.name === "MongoError" && error.code === 11000) {
      console.log("Email must be unique");
      next(new BadRequestError('Email already exists, please try another'));
    } else if (error.keyValue.name != null && error.name === "MongoError" && error.code === 11000) {
      console.log("Username must be unique");
      next(new BadRequestError('Username already in use, please try another'));
    } else {
      console.log("not found any idea, search for another reasons");
      next(error);
    }
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;