// const filterFunc=(arr)=>{
//    return arr.filter((item,index)=> {
//     return item>4
//    })
// }
// console.log(filterFunc([1,5,6,8,9,2,3]));

Array.prototype.myFilter=function(cbFun){

    const result=[]
    for(let i=0;i<this.length;i++){
        if(cbFun(this[i])){
            result.push(this[i])
        }
    }
    return result
}
const arr=[1,2,5,4,6]
const finalResult=arr.myFilter((item)=>item>4)
console.log(finalResult);