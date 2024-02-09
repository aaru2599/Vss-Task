function function1() {
    return new Promise((resolve, reject) => {
        resolve("Promise1")
    })
}
function function2(name) {

    return new Promise((resolve, reject) => {
        resolve(name)
    })
} function function3() {
    return new Promise((resolve, reject) => {
        resolve("Promise3")
    })
}
function1().then((result1) => {
    console.log(result1);
    return result1
}).then((result2) => {
    console.log(result2);
    return function3();
}).then((result3) => {
    console.log(result3);
}).catch((err) => {
    console.log(err);
})
