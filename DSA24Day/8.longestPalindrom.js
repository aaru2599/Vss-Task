
const longestPalindrom = (input) => {
    const strArray = input.split(" ");
    let largestPalindrom = ""
    for (let i = 0; i < strArray.length; i++) {
        let elem = strArray[i];
        for (let j = elem.length; j >= 0; j--) {
            if ((elem[j] === elem) && (elem.length > largestPalindrom.length)) {

                largestPalindrom = elem

            }
        }
    }
    return largestPalindrom

}

console.log(longestPalindrom("nan pap nitin is racecar"));