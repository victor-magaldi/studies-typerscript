// para definir o nome precisa ser maiúsculo
enum Cores {
   Vermelho,  //0
   Azul, //1
   Amarelo //2
}
enum Cores1 {
   Vermelho="Vermelho",  //0
   Azul="Azul", //1
   Amarelo="Amarelo" //2
}

console.log(Cores[0]) // Vermelho
console.log(Cores[999]) // não dá nenhum erro, isso é ruim

export function escolhaCor(cor:Cores1){
   console.log(Cores1[cor])
}
escolhaCor(Cores1.Amarelo)


