function maxChars(str) {
    const charMap = {};
    let char = '';
    let max = 0;

    for (let s of str) {
        if (charMap[s]) {
            charMap[s]++;
        } else {
            charMap[s] = 1;
        }
    }


    for (let k in charMap) {
        if (charMap[k] > max) {
            char = k;
            max = charMap[k];
        }
    }

    return char;


}

module.exports = maxChars;

