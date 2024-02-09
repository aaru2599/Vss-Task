
const LongestWordInString = (input1) => {
    let longestWord = "";
    const strArr = input1.split(" ")
    console.log(strArr);
    for (let i = 0; i < strArr.length; i++) {
        let elem = strArr[i];
        if (elem.length > longestWord.length) {
            longestWord = elem
        }
    }
    return longestWord
}
console.log(LongestWordInString("Hi my name is Arvind"));
