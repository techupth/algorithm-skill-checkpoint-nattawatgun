// Problem
// Given a string, determine if it is a palindrome,
// meaning it reads the same forwards and backwards,
// including spaces and punctuation.
// Return true if it is, false if it is not.

// Examples:
// palindrome("abba") === true
// palindrome("abcdefg") === false

export const palindrome = (str) => {
    const reverse = str.split('').reverse().join('')
    return str === reverse
};


console.log(palindrome('ยาย'))
console.log(palindrome('นอน'))
console.log(palindrome('กนก'))
console.log(palindrome('ข้าว'))
console.log(palindrome('abba'))
console.log(palindrome('abcdefg'))