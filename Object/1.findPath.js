/*
- Write method findPath
- Should take two params:
    - object
    - keys separated by dots as string
- Return value if it exists at that path inside the object, else return undefined

Step:firsty we need to break the path into array 
     so we can iterate that|
Step2:run loop to iterate path and save every element into key
step3:Check if object have the first key is present in object 
     then replace the old object with this new object 
     else return undefined
step4:if every key present in object then return last key object
*/

var obj = {
    a: {
        b: {
            c: 12,
            j: false
        },
        k: null
    }
};



const findPath = (object, path) => {
    const keys = path.split('.')
    //   console.log(keys);  
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];

        // console.log(object.hasOwnProperty(key));
        if (object && object.hasOwnProperty(key)) {
            object = object[key];

        }
        else {
            return undefined
        }
    }
    return object
};



console.log(findPath(obj, 'a.b.c')); // 12
// console.log(findPath(obj, 'a.b')); // {c: 12, j: false}
// console.log(findPath(obj, 'a.b.d')); // undefined
// console.log(findPath(obj, 'a.c')); // undefined
// console.log(findPath(obj, 'a.b.c.d')); // undefined
// console.log(findPath(obj, 'a.b.c.d.e')); // undefined