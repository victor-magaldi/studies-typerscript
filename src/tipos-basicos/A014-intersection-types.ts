// union type seria | (lido também como "OU")

// intersection  &
type hasName = {name:string}
type hasLastNAme = {lastName:string}
type hasAge = {age:number}

// o intersection & faz com que seja obrigatória as chaves definidas
type Person = hasName & hasLastNAme& hasAge //AND

const person:Person={
   name:"victor",
   lastName:"test",
   age:88
}

console.log(person)

export default 1
