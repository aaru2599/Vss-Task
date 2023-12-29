
String.prototype.myTrim=function(){
    const regEx=/^\S*\s*\S*$/g
    return this.replace(regEx," ")
}
const myName="  Hello Brother   "
const len=myName.myTrim()
console.log(len);
console.log(len.length);


