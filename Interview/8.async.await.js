console.log("Hello start");
const function1 = async () => {

   return await new Promise((resolve, reject) => {
        console.log("1");
        setTimeout(() => {
            resolve("helolo inside promise")
        }, 1000);
        console.log(2);
    })
}
function1().then(result => console.log(result)).catch(err => console.error(err))
console.log("End");