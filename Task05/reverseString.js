


function reverseString(str) {
    if(str==""){
        return ""
    }
    let result=reverseString(str.substr(1));
    console.log(result);
return result+str.charAt(0);
} 
console.log(reverseString("Arvind"));



// let newReverseString = (input, index) => {
//     if (index !== input.length) {
//         return newReverseString(input, index + 1) + input[index]
//     }
// }
// console.log(newReverseString("Arvind" ));