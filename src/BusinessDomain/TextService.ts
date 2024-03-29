import fs from 'fs/promises';

class TextService {

    private static readonly VOCAL_VALUE_MAPPING = {
        a: 2,
        e: 4,
        i: 8,
        o: 16,
        u: 32,
    };

    public async getSumOfAllDigits<T>(pathToFile: string, fn: (text: string, service: TextService|undefined) => T): Promise<T> {
        return fn((await fs.readFile(pathToFile)).toString(), this);
    }

    public calculateSumOfAllDigits(text: string): number {
        return text.split('').reduce((acc, curr) => acc + ('123456789'.split('').includes(curr) ? ~~curr : 0), 0);
    }

    public calculateSumOfAllDigitsAndVocals(text: string): number {
        return text.split('').reduce((acc, curr) => acc + ('123456789'.split('').includes(curr)
            ? ~~curr
            : 'aeiou'.split('').includes(curr) ? TextService.VOCAL_VALUE_MAPPING[curr] : 0
        ), 0);
    }

    public calculateSumOfAllDigitsPerSentence(text: string, service: TextService): number[] {
        return text.split(/(\?|\.|!)/).map(curr => service.calculateSumOfAllDigits(curr));
    }

}

export default TextService;
