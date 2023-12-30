function function1(data) {
    return new Promise((resolve,reject)=>{
        if(data){
            resolve("Success")
        }
        else{
            reject("Error")
        }
    })
}

let promise=function1(true)
promise.then(result=>{
    console.log(result);
    return
})