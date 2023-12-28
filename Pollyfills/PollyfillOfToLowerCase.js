/**
 * 
 * Create a polyfill for toLowerCase
 * Step1:declare a empty array
 * Step2:iterate every element in forloop and check
 *       If that element ascii value is greater then 64 and less then 91
 *       now we can push we can push the character which Ascii value is (that char val+32)       
 *      else push the same element
 * step3:join that array and return  
 */
String.prototype.myToLowerCase = function () {
    const result = []
    for (let i = 0; i < this.length; i++) {
        const charCode = this.charCodeAt(i)
        if (charCode >= 65 && charCode <= 90) {
            result.push(String.fromCharCode(charCode + 32))
        }
        else {
            result.push(this[i])
        }
    }
    return result.join("")
}
console.log("Hello my Name is ARVINd".myToLowerCase());
