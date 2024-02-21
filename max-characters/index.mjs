// Problem
// Given a string,
// find and return the character that appears most frequently in the string.

// Examples:
// getMaxCharacters("abcccccccd") === "c"
// getMaxCharacters("apple 1231111") === "1"

const getMaxCharacters = (str) => {
    const charFrequen = {}
    for (let char of str) {
        charFrequen[char] = (charFrequen[char] || 0) + 1
    }
    let maxChar = ''
    let maxCount = 0
    for (let char in charFrequen) {
        if (charFrequen[char] > maxCount) {
            maxCount = charFrequen[char]
            maxChar = char
        }
    }
    return maxChar
}

console.log(getMaxCharacters("abcccccccdd"))
console.log(getMaxCharacters("apple 1231111"))