const reverse = require("../reverse/reverse")

function palindrome(input) {
    return input === reverse(input);
}

module.exports = palindrome;