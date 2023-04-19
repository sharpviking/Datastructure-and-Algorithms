function hasPairWithSum(arr, sum) {
    const len = arr.length;
    for (var i = 0; i < len - 1; i++) {
        for (var j = 0; j < len; j++) {
            if (arr[i] == arr[j] === sum)
                return true;
        }
    }

    return false
}


hasPairWithSum([6, 4, 3, 2, 1, 3], 9)