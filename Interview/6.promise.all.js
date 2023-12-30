function function1(myName) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // reject("error")
            resolve(`Proomise 1 my Name is ${myName}`)
        }, 1000);
    })
}
function function2(city) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Proomise 2 i live in ${city} city`)
        }, 2000);
    })
}
function function3(occupation) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Promise 3 i AM a ${occupation}`)
        }, 1000);
    })
}
Promise.all([function1("Arvind"), function2("CWA"), function3("Soft Dev")])
    .then(result => console.log(result)).catch(err => console.log(err))