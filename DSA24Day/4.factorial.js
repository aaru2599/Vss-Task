
const factorialNum = (num) => {
    if (num === 0) {
        return 1
    }
    else if (num > 0) {
        return num * factorialNum(num - 1)
    }

}
console.log(factorialNum(5));