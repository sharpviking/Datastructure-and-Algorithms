function boooo(n) {
    for (let i = 0; i < n.length; i++) {
        console.log('booooooo!');
    }
}

boooo([1, 2, 3, 4, 5, 6, 7]) // O(1) Space  complexity.


function arrayOfHiNTimes(n) {
    let hiArray = [];
    for (let i = 0; i < n; i++) {
        hiArray[i] = 'hi';
    }
    return hiArray
}
arrayOfHiNTimes(11) // O(n)
