console.log("Hello1");
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("inside Timeout");
        const result = true
        if (result) resolve("Promise resolves")
        else reject("error")
    }, 2000);
})
// promise1
//     .then((result) => console.log(result))
//     .catch((err) => console.log(err))

console.log(promise1);
console.log("Hello2");
