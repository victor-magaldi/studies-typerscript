// é um subtipo de number, porém só pode ser 10
const y = 10

// com let definimos que só pode ser do tipo 100
let a :100 = 100;

let b = 100 as const

const pessoa = {
   // torna o name imutável(asserção)
   name:"victor" as const,
   age :20
}
pessoa.name = "victor"

function selectColor(color:"vermelho"|"branco"|"azul"){
   console.log(color)
}
console.log(pessoa)
selectColor("azul")
export default 1
