// Remove Duplicate characters from String

const str = "My Name is arvind";

// const removeDup=(str)=>{
// const result=new Set(str) 
// return [...result].join("")
// }
// console.log(removeDup(str));


const removeDup = (strData) => {
    const str=strData.split("")
for(let i=0;i<str.length;i++){
    for(let j=i+1;j<str.length;j++){
        if(str[i].toLowerCase()===str[j].toLowerCase()){
            str.splice(j,1)
        }
    }
}
return str.join("")
}
console.log(removeDup(str));
