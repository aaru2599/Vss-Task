function getElembyId(Id){
 return document.getElementById(Id)
}
const element=getElembyId("uName");
if(element){
    console.log(element)
}
else{
    console.log(`${element} not found`);
}