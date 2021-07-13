export let x:any;
x= 200;
x="10"

const y = x+10
console.log(y)

// o unknown  é mais restritivo que any
export let  t:unknown;
t= 200;
t="10"

// precisaria verficar antes de fazer algumas coisas
if(typeof t === "number" ) console.log( t+10)
