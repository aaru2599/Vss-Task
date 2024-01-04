Array.prototype.myMap=function (cbF){
const result=[]
for(let i=0;i<this.length;i++){
    result.push(cbF(this[i]))
}
return result
}
const arr=[1,2,5,6,8]
const nreResult=arr.myMap((item)=>item)
console.log(nreResult);