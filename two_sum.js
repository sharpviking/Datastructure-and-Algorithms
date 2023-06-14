//Two Sum: Given an array of integers and a target value, 
// find two numbers in the array that add up to the target. This 
// problem can be efficiently solved using a hash table to store the complement of each element as we traverse the array.

function twoSum(nums, target) {
    const numMap = {};
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (complement in numMap) {
            return [numMap[complement], i];
        }
        numMap[nums[i]] = i;
    }
    return null;
}
