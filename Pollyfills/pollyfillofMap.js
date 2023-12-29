
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
    console.log("this",this);
    console.log("cbFun",cbFun);
    const result=[]
    for(let i=0;i<this.length;i++){
        result.push(cbFun(this[i]))
    }
    return result
}


const newResult=[1,5,6,3].myMap((item)=>item*2)
console.log(newResult);