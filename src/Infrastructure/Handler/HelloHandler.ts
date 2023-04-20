import Handler from "./Handler.js";

class HelloHandler extends Handler {
    run(): void {
        this.response.setHeader('Content-Type', 'application/json');
        this.response.end(JSON.stringify({
            routes: [
                '/task1',
                '/task2',
                '/task3',
            ]
        }));
    }
}

export default HelloHandler
