// Intersection of Two Arrays: Given two arrays, write a function to compute their intersection. 
// The solution can be optimized using hash tables to store the elements of one array, 
// and then checking for common elements in the second array.

function intersection(nums1, nums2) {
    const numSet = new Set(nums1);
    const intersectionSet = new Set();
    for (let num of nums2) {
        if (numSet.has(num)) {
            intersectionSet.add(num);
        }
    }
    return Array.from(intersectionSet);
}
