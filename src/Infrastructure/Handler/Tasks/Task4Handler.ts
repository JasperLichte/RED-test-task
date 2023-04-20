import ArrayService from "../../../BusinessDomain/ArrayService.js";
import TextService from "../../../BusinessDomain/TextService.js";
import Handler from "../Handler.js";

class Task4Handler extends Handler {
    private textService = new TextService(); // TODO: DI
    private arrayService = new ArrayService();

    run(): void {
        this.response.setHeader('Content-Type', 'application/json');
        this.textService.getSumOfAllDigits('task/clear_smaller.txt', this.textService.calculateSumOfAllDigitsPerSentence).then(result => {
            this.response.end(JSON.stringify({
                'largestSums': this.arrayService.getNLargestNumbersFromArray(result, 3),
                'largestSumsInOrderOfAppearance': this.arrayService.getNLargestNumbersFromArrayInOrderOfAppearence(result, 3),
                'largestSumsInOrderOfAppearanceMinusIndex': this.arrayService.getNLargestNumbersFromArrayInOrderOfAppearenceMinusIndex(result, 3),
                'allSums': result,
            }));
        });
    }
}

export default Task4Handler;
