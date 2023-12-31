function function1(myName) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("error")
            resolve(`Proomise 1 my Name is ${myName}`)
        }, 0);
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
Promise.any([function1("Arvind"), function2("CWA"), function3("Soft Dev")])
    .then(result => console.log(result)).catch(err => console.log(err))

    const name="Hello, I'm Arvind Mandre—a frontend developer passionate about crafting engaging user experiences. Proficient in ReactJS, JS,HTML,Bootstrap, , I seamlessly blend creativity with code. Additionally, my Java expertise adds depth to my skill set.".length
    console.log(name);