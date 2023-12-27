
/**
 * Create a pollyfill for map function
 * 
 * Step1:
 */
// const myMapFunc=(arr,cbFun)=>{
//     let newArr=[]
//     for(let i=0;i<arr.length;i++){
//         newArr.push(cbFun(arr[i]))
//     }
//     return newArr
// }
// const result=(a)=>{
// return a
// }

// console.log(myMapFunc([1,2,5,7],result));

Array.prototype.myMap=function(cbFun){
    let newArr=[]
    for(let i=0;i<this.length;i++){
        newArr.push(cbFun(this[i]))
    }
    return newArr
}

const multiplyArr=(arr)=>{
   return arr.map(item=>item*item)
}
console.log(multiplyArr([1,2,5,8,6]));