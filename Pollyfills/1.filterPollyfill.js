Array.prototype.myFilter=function(cbFunc){
const result=[]
for(let i=0;i<this.length;i++){
    if(cbFunc(this[i],this,i)){
        result.push(this[i])
    }
}
return result
}
const arr=[1,2,5,4,6,8,2];
const myResult=arr.myFilter((elem)=>elem>3)
console.log(myResult);