module.exports = function reverseNum(n) {
    return parseInt(String(n).split("").reverse().join(""));
};
