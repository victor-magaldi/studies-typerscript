// void significa que uma função não vai retornar nada
function showNames(...names: string[]): void {
   console.log(names.join(", "))
}
showNames("victor", "joão")
