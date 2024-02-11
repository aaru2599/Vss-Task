function deepCopy(obj) {
    if (typeof obj !== 'object' || obj === null) {
      // Return primitive types and null as is
      return obj;
    }
    
    // Create a new object or array to hold the copied values
    const copy = Array.isArray(obj) ? [] : {};
    
    // Iterate through each key in the original object
    for (let key in obj) {
      // Recursively copy nested objects or arrays
      copy[key] = deepCopy(obj[key]);
    }
    
    return copy;
  }
  
  let obj = { a: [1, 2, 3, 4], b: { c: "test" } };
  let deepObj = deepCopy(obj);
  console.log(deepObj); // false, because it's a deep copy
  