const detectPalindrome = (word) => {
    lowWord = word.toLowerCase()
    if (lowWord === lowWord.split("").reverse().join("")) return `${word} is a palindrome`;
    else return `${word} is not a palindrome`;
};
console.log(detectPalindrome("Racecar"));