
// const arr=[1,2,5,6,3];
// const sunArr=arr.reduce((acc,cur,index,arr)=>{
//     return acc+cur
// },0)
// console.log(sunArr);
/**
 * 
 * @param {*} cbFunc 
 * @param {*} initialVal 
 * @returns 
 * Create a polyfill for Reduce function
 */

Array.prototype.myReduce = function(cbFunc, initialVal)  {
    var acc = initialVal;
    for (let i = 0; i < this.length; i++) {
        acc = acc ? cbFunc(acc, this[i], this, i) : this[i]
    }
    return acc
};

const arr = [1, 2, 5, 6, 3];
const sumArr = arr.myReduce((acc, cur, i, arr) => {
    return acc + cur
}, 0)
console.log(sumArr);
