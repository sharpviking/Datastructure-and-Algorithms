function reverseString(str) {
    return str.split('').reverse().join('');

}

const inputStr = "Hello";
const reverseStr = reverseString(input);
console.log(reverseStr);