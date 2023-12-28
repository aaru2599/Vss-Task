// console.log(myName.toUpperCase());

String.prototype.myToUpperCase = function () {
    const result = []
    for (let i = 0; i < this.length; i++) {
        const charCode = this.charCodeAt(i)
        if (charCode >= 97 && charCode <= 122){
            result.push(String.fromCharCode(charCode-32))
        }
        else{
            result.push(this[i])
        }
    }
    return result.join("")
    
}
const myName = "Arvind Mandre"
console.log(myName.myToUpperCase());
