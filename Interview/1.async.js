const promise1 = new Promise((resolve,reject)=>{
    reject("Hello Promise 1")
})
const promise2 = new Promise((resolve,reject)=>{
    resolve("Hello Promise 2")
})

Promise.any([promise1,promise2])
.then((result)=>console.log(result)).catch((err)=>console.log(err))


function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function asyncFunction() {
    console.log('Start');
    await delay(2000);
    console.log('Middle');
    await delay(1000);
    console.log('End');
  }
  
  asyncFunction();
  console.log('Async function executed.');