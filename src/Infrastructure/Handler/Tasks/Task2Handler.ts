import TextService from "../../../BusinessDomain/TextService.js";
import Handler from "../Handler.js";

class Task2Handler extends Handler {
    private service = new TextService();

    run(): void {
        this.response.setHeader('Content-Type', 'application/json');
        this.service.getSumOfAllDigits('task/clear_smaller.txt', this.service.calculateSumOfAllDigits).then(result => {
            this.response.end(JSON.stringify({
                result
            }));
        });
    }
}

export default Task2Handler;
