
export default class ServiceUnavailableError extends Error {

    code = 400;
    statusText = "SERVICE UNAVAILABLE";
    message = "SERVICE UNAVAILABLE";

    constructor (message) {
        this.message = message;
        super(this.message);
    }
}