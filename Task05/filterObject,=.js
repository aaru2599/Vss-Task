function groupBy(objects, key) {
let result={};
for(let i=0;i<objects.length;i++){
    let elem=objects[i]
 if(result.hasOwnProperty(elem[key]))
 {
    result[elem[key]].push(elem);

 }
 else{
    result[elem[key]]=[elem]
 }
}
return result
}

const inputObjects = [
  { id: 1, category: 'A', value: 10 },
  { id: 2, category: 'B', value: 20 },
  { id: 3, category: 'A', value: 30 },
  { id: 4, category: 'B', value: 40 },
  { id: 5, category: 'C', value: 50 },
];

console.log(groupBy(inputObjects,"category"));



/* Should output:
{
  'A': [ { id: 1, category: 'A', value: 10 }, { id: 3, category: 'A', value: 30 } ],
  'B': [ { id: 2, category: 'B', value: 20 }, { id: 4, category: 'B', value: 40 } ],
  'C': [ { id: 5, category: 'C', value: 50 } ]

  if it present 
}
*/