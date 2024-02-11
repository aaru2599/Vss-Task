
const primeNumber = (num) => {
    if ( num === 2){
        return "prime"
    }
 
    for(let i=2;i<num;i++){
        if(num%i===0){
            return false
            
        }
    }
    return true
}
console.log(primeNumber(6));