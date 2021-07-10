export function squareOf(x:any){
    if (typeof x === "number") return x*x;
    return null
}

console.log(squareOf(2))
console.log(squareOf("2"))

