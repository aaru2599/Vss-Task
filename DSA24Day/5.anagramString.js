const anagramString = (str1, str2) => {
    const result1 = str1.toLowerCase().split("").sort()
    const result2 = str2.toLowerCase().split("").sort()

    return result1.join("") === result2.join("")

}
console.log(anagramString("Heart", "Earth"));