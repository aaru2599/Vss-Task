Array.prototype.myMap = function (cbFunc) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(cbFunc(this[i]));
    }
    return result
}
const arr = [1, 2, 5, 4, 6, 3];
const mainResult=arr.myMap((elem)=>elem+2);
console.log(mainResult);
