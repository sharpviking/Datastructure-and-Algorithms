function printAllNumbersThenAllPairsSum(numbers) {

    console.log('these are the numbers:');
    numbers.forEach(function (number) {
        console.log(number);
    });


    console.log('and these are their sums:');
    numbers.forEach(function (firstNumber) {
        numbers.forEach(function (secondNumber) {
            console.log(firstNumber + secondNumber);
        })
    })
}

const numbers = [2, 3, 4, 5, 6];
printAllNumbersThenAllPairsSum(numbers);

// The forEach() method executes a provided function once for each array element.