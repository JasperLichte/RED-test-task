class ArrayService {
    public getNLargestNumbersFromArray(array: number[], n: number) {
        if (array.length < n) {
            throw new Error(`Array must have at least ${n} elements.`);
        }
    
        const sortedArr = array.slice().sort((a, b) => b - a);
        return sortedArr.slice(0, n);
    }
    
    public getNLargestNumbersFromArrayInOrderOfAppearence(array: number[], n: number) {
        if (array.length < 3) {
            throw new Error("Array must have at least 3 elements.");
        }

        return array
            .map((value, index) => ({ value, index }))
            .sort((a, b) => b.value - a.value)
            .slice(0, n)
            .sort((a, b) => a.index - b.index)
            .map((item) => item.value);
    }
    
    public getNLargestNumbersFromArrayInOrderOfAppearenceMinusIndex(array: number[], n: number) {
        if (array.length < 3) {
            throw new Error("Array must have at least 3 elements.");
        }

        return array
            .map((value, index) => ({ value: value - index, index }))
            .sort((a, b) => b.value - a.value)
            .slice(0, n)
            .sort((a, b) => a.index - b.index)
            .map((item) => item.value);
    }
}

export default ArrayService;
