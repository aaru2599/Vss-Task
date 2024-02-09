function swapNumWithThirdVar() {
    let input1 = 10;
    let input2 = 20;
    input1 = input1 + input2
    input2 = input1 - input2
    input1 = input1 - input2

    console.log(input1);
    console.log(input2);
    return ""

}
console.log(swapNumWithThirdVar());