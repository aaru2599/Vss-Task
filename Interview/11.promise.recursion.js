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
            // reject("err")/
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

function promiseREcu(funcPromise) {
    if (funcPromise.length === 0) return;

    const currentPromise = funcPromise.shift();
    currentPromise
        .then(result => console.log(result))
        .catch(err => console.error(err))
    promiseREcu(funcPromise)
}
promiseREcu([
    function1("Arvind"),
    function2("CWA"),
    function3("Soft Dev")])