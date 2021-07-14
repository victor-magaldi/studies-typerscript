type Mapstring = (param:string)=>string
function mapString(array : Array<string>, callback :Mapstring):Array<string>{
   const newArray:Array<string>= []

   for(let i=0 ; i < array.length; i++ ){
      const item = array[i]
      newArray.push(callback(item))
   }
   return newArray
}


const abc = ["a","b","c"]

const abcMaped = mapString(abc,(item)=>item.toUpperCase())

console.log(abcMaped)
export default 1
