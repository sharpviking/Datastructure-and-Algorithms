//Log all pairs of Array

const boxes = [1, 2, 3, 4, 5, 6, 7];

function logAllPairsOfArray(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            console.log(i, j)
        }
    }
}


logAllPairsOfArray(boxes)

// when there is a nested loop in a function,
// we generally multiply "n", so O(n^2) . it is also called quadratic time.
//"Horrible" for the sake of time complexity


// And an easy rule of thumb is any step that happens in the same indentation.

// So one after another you add.

// And anything that happens with indentation that is nested.

// You multiply.