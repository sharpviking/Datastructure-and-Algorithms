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

