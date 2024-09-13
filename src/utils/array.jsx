export const deepClone = (array) => {
  return JSON.parse(JSON.stringify(array))
}


export const findInArray = (id,array) => { 
  return array.find((itemInArray) => itemInArray.id === id)
 }

 export const findIndex = (id, array) => { 
  return array.findIndex((itemToFind) => itemToFind.id === id)
  }


 export const filter = (idProductItemToRemove, array) => { 
  return array.filter((item)=> item.id !== idProductItemToRemove)
  }
// const fruits = [{ nom: "Abricot" }, { nom: "Banane" }]
// const fruitsShallowCopy = [...fruits]
// const fruitsDeepCopy = deepClone(fruits)

// //fruitsShallowCopy[1].nom = "Cerise"
// fruitsDeepCopy[1].nom = "Cerise"

// console.log("fruits: ", fruits)
// //console.log("fruitsShallowCopy: ", fruitsShallowCopy)
// console.log("fruitsDeepCopy: ", fruitsDeepCopy)
