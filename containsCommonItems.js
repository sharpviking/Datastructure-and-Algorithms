const array0 = ['a', 'b', 'c', 'x', 'z']
const array01 = ['e', 'g', 'j', 'x', 'w']


function containsCommonItems(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                return true;
            }
        }
    }

    return false;
}

containsCommonItems(array0, array01);


// Another solution

const array1 = ["a", "b", "c", "x"];
const array2 = ["z", "y", "a"];




function containsCommonItems2(arr1, arr2) {

}