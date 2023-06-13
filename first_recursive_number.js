function findFirstRecursiveNumber(numbers) {
    let seenNumbers = new Set();

    for (let i = 0; i < numbers.length; i++) {
        let currentNumber = numbers[i];

        if (seenNumbers.has(currentNumber)) {
            return currentNumber; // Found the first recursive number
        }

        seenNumbers.add(currentNumber);
    }

    return null; // No recursive number found
}

// Example usage:
let numbers = [2, 5, 1, 3, 2, 4, 6];
let recursiveNumber = findFirstRecursiveNumber(numbers);

if (recursiveNumber !== null) {
    console.log("First recursive number:", recursiveNumber);
} else {
    console.log("No recursive number found.");
}
