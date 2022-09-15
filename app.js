const binaryArrayToNumber = arr => {
    // join array and make string;
    let myNum = arr.join('').toString(2)
    // take the binary num and make decimal
    return parseInt(myNum, 2)
};

console.log(binaryArrayToNumber([0, 0, 0, 1])); // 1
console.log(binaryArrayToNumber([0, 0, 1, 0])); // 2
console.log(binaryArrayToNumber([1, 1, 1, 1])); // 15
console.log(binaryArrayToNumber([0, 1, 1, 0])); // 6