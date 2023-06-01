function mergeSortedArrays(array1, array2) {
    const mergedArray = [];
    let array1Item = array1[0];
    let array2Item = array2[0];
    let i = 1;
    let j = 1;

    //check Input

    if (array1.length === 0) {
        return array2
    }
    if (array2.length === 0) {
        return array1
    }

    while (array1Item || array2Item) {
        if (!array2Item || array1Item < array2Item) {
            mergedArray.push(array1Item)
            array1Item = array1[i];
            i++;
        } else {
            mergedArray.push(array2Item);
            array2Item = array2[i];
            j++;
        }
    }

    return mergedArray;
}

// Another solution//
function mergeSortedArrays(arr1, arr2) {
    const mergedArray = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
            mergedArray.push(arr1[i]);
            i++;
        } else {
            mergedArray.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length) {
        mergedArray.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        mergedArray.push(arr2[j]);
        j++;
    }

    return mergedArray;
}

// Example usage:
const arr1 = [1, 3, 5, 7];
const arr2 = [2, 4, 6, 8];
const merged = mergeSortedArrays(arr1, arr2);
console.log(merged);
