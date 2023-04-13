const arr = [1, 2, 4, 4];
const targetSum = 8;

for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === targetSum) {
            console.log(`Pair found: ${arr[i]} + ${arr[j]} = ${targetSum}`);
        }
    }
}


