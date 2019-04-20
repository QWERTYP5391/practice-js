function arraychunk(arr, k) {
    const chunked = [];
    let index = 0;

    while (index < arr.length) {
        chunked.push(arr.slice(index, index + k));
        index += k;
    }
    return chunked;

}

module.exports = arraychunk;