const wordArray = ["Arvind", "Mandre"]
function reverseWord(strArray) {
    const result = []
    for (let i = strArray.length - 1; i >= 0; i--) {
        result.push(strArray[i])
    }
    return result
}
console.log(reverseWord(wordArray));