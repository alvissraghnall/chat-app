
export default class BadRequestError extends Error {

    message = "Malformed request. Please confirm validity of request body";

    constructor (message) {
        this.message = message;
        super(this.message);
    }
}