const str = "Arvind Mandre".toLowerCase()
const removeDupFil = (strData) => {
    const strArr=strData.split("")
const result=strArr.filter((item,i)=>strArr.indexOf(item)!==i)
return result.join(" ")
}
console.log(removeDupFil(str));