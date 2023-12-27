// const filterFunc=(arr)=>{
//    return arr.filter((item,index)=> {
//     return item>4
//    })
// }
// console.log(filterFunc([1,5,6,8,9,2,3]));

Array.prototype.myFilter=function(cbFun){
    let newArr=[]
    for(let i=0;i<this.length;i++){
        if (cbFun(this[i],i,this)) newArr.push((this[i]))
    }
return newArr
};
const myArr=[1,5,6,8,9,2,3]
const filterArr=myArr.myFilter((num)=>{
    return num>4
})
console.log(filterArr);