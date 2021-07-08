//Array<T>-T[]
export function multiplicaArgs(...args: Array<number>):number{
   return args.reduce((acumulador,valor)=>
   {
      return acumulador*valor},1)
}
export function concatString(...args: string[]):string{
   return args.reduce((acumulador,valor)=>
   {
      return acumulador + valor})
}
export function toUpperCase(...args: string[]):string[]{
   return args.map(item=>item.toUpperCase())
}

const resultMult = multiplicaArgs(1,2,3,4)
const resultconcat = concatString("Victor", " de", " Souza ")
const resultUpper = toUpperCase("Victor", " de", " Souza ")



console.log(resultMult)
console.log(resultconcat)
console.log(resultUpper)

