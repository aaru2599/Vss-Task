// Using async/await
async function asyncFunction() {
    console.log('Start');
    const result = await new Promise((resolve) => {
      setTimeout(() => resolve('Async/Await'), 2000);
    });
    console.log(result);
    console.log('End');
  }
  
  // Using Promise chaining
  function promiseChain() {
    console.log('Start');
    new Promise((resolve) => {
      setTimeout(() => resolve('Promise Chain'), 2000);
    })
    .then((result) => {
      console.log(result);
      console.log('End');
    });
  }
  
  asyncFunction();
  promiseChain();
  