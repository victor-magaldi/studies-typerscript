// void significa que uma função não vai retornar nada
function showNames(...names: string[]): void {
   console.log(names.join(", "))
}
const pessoa = {
   nome: "VICTOR OBJETO",
   idade: 27,
   showName(): void {
      console.log(this.nome)
   }
}
showNames("victor", "joão")
pessoa.showName()
