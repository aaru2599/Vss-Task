Array.prototype.myFilter = function (cbFunc) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        if (cbFunc(this[i], this,i)) {
            result.push(this[i])

        }
    }
    return result
}
const arr = [1, 4, 5, 2, 3, 5]
const newResult = arr.myFilter((item) => {
    return item > 2
})
console.log(newResult);