module.exports = function reverse(n) {
    const toString = n.toString();
    return parseInt(toString.split("").reverse().join(""));
};
