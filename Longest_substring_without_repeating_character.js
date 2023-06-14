// Longest Substring Without Repeating Characters: Given a string, 
// find the length of the longest substring without repeating characters. 
// This problem can be solved using a sliding window technique and a hash table to store the indices of characters.

function lengthOfLongestSubstring(s) {
    const charMap = {};
    let maxLength = 0;
    let start = 0;
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (char in charMap && start <= charMap[char]) {
            start = charMap[char] + 1;
        } else {
            maxLength = Math.max(maxLength, i - start + 1);
        }
        charMap[char] = i;
    }
    return maxLength;
}
