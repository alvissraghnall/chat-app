import crypto from "crypto";

export async function hash (password) {
    return new Promise((resolve, reject) => {
        const salt = crypto.randomBytes(11).toString("hex");

        crypto.scrypt(password, salt, 64, (err, derivedKey) => {
            if (err) reject(err);
            resolve(salt + ":" + derivedKey.toString("hex"));
        });
    })
}

export async function verify (password, hash) {
    return new Promise((resolve, reject) => {
        const [salt, key] = hash.split(":");
        crypto.scrypt(password, salt, 64, (err, derivedKey) => {
            if (err) reject(err);
            resolve(key === derivedKey.toString("hex"));
        });
    });
}