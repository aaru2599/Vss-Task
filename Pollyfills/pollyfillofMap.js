const arr=[1,2,5,4,6]

const myNewMap=(arr,callBackFn)=>{

    let mappedArray=[]

        for(let i=0;i<arr.length;i++){
            mappedArray.push(callBackFn(arr[i]))
    }
    return mappedArray
}
const result=(a)=>{
    return a
}
console.log(myNewMap(arr,result));