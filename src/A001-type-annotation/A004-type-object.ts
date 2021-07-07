const obj: {
   readonly keyA: string;
   keyB: string;
   // index signature usado quando não sabe qual chave será criada posteriormente (linha 11)
   [key: string]: unknown
} = {
   keyA: "teste",
   keyB: "teste2"
}
//aqui criamos uma nova prop
obj.keyC = "nova prop"

console.log(obj.keyB)
console.log(obj.keyC)

