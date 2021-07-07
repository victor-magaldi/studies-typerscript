// inferência de tipos
let nome: string = 'teste'; //qualquer tipo de string;
let idade: number = 15; // qualquer tipo de numero 1.57 , 2, 0xf00d
let adulto: boolean = false; // true ou false
let símbolo: symbol; // qualquer símbolo
// let big: bigint =10n //bigint

let arrayOfNumbers2: Array<number> = [1, 3, 4, 5];
// ou pode declarar
let arrayOfNumbers: number[] = [1, 3, 4, 5];

// let arrayOfNumbersStrings: Array<number | string> = [1, '4', 3, 4, 5];
// ou pode declarar

let arrayOfNumbersStrings: any[] = [1, '4', 3, 4, 5];


// objetos
// O ?: define uma propriedade não obrigatória , adulto aceita undefined
let pessoas: { nome: string, idade: number, adulto?: boolean } = { nome: "Victor", idade: 99, }

// funcoes
// pode definir assim
function soma(x: number, y: number): number {
   return x + y
}
// ou
const soma: (a: number, b: number) => number = (a, b) => a + b
const result = soma(1, 2)
