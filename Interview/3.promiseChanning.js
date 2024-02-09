// function function1(myName) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`Proomise 1 my Name is ${myName}`)
//         }, 1000);
//     })
// }
// function function2(city) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`Proomise 2 i live in ${city} city`)
//         }, 2000);
//     })
// }
// function function3(occupation) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`Promise 3 i AM a ${occupation}`)
//         }, 3000);
//     })
// }
// function1("Arvind")
//     .then((result) => {
//         console.log(result)
//         return function2("Chhindwara")
//     }).then(result => {
//         console.log(result)
//         return function3("Soft Dev")
//     }).then(result => {
//         console.log(result);
//     })
//     .catch(err => console.log(err))












function function1() {
    return new Promise((resolve, reject) => {
        resolve("Resolve 1");
    })
}

function function2() {
    return new Promise((resolve, reject) => {
        resolve("Resolve 2");
    })
}
function function3() {
    return new Promise((resolve, reject) => {
        resolve("Resolve 3");
    })
}
function1().then((result) => {
    console.log(result);
    return function2();

}).then((res) => {
    console.log(res);
    return function3();
}).then((res) => {
    console.log(res);
})
    .catch((err) => {
        console.log(err);
    })
