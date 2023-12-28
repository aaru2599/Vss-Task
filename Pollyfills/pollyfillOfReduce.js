Array.prototype.myReduce = function (cbFun, initialState) {
    let acc = initialState;
    for (let i = 0; i < this.length; i++) {
        acc = acc ? cbFun(acc, this[i], i, this) : this[i]

    }
    return acc
}

const newArr= [1, 2, 4, 5, 6];
const newRes =newArr.myReduce((acc, cur,i,newArr) => {
    return acc + cur
}, 0)

console.log(newRes);

