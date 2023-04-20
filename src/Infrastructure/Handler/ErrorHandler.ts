import Handler from "./Handler.js";

class ErrorHandler extends Handler {
    constructor(private error: Error) {
        super();
    }

    run(): void {
        this.response.end(`Error: ${this.error.message}`);
    }
}

export default ErrorHandler;
