
export default class BadRequestError extends Error {

    code = 400;
    statusText = "BAD REQUEST";
    message = "Malformed request. Please confirm validity of request body";

    constructor (message) {
        this.message = message;
        super(this.message);
    }
}