import Handler from "./Handler.js";

class HelloHandler extends Handler {
    run(): void {
        this.response.end('Hello World');
    }

}

export default HelloHandler
