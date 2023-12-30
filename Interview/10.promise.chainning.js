const firstPromise= new Promise((resolve,reject)=>{
    resolve("first")
    
})
const secondPromise=new Promise((resolve,reject)=>{
    resolve(firstPromise)
})
secondPromise.then(result=>{
    return result
}).then(result=>console.error(result))