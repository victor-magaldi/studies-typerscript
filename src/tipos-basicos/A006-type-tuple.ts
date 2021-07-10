const dadosClient : [ number, string, string]= [1,"o","b"]

// deixando um valor opcional dadosClient2[2]
const dadosClient2 : [ number,string, string?]= [1,"o"]

// o restante com tipo number. O rest possibilita você deixar o array de tamanho indefinido
const dadosClient3 : [ number,string, ...number[]]= [1,"o",0,2,3,4]

// tornando tupla imutável
const dadosClient4 : readonly[ number,string]= [1,"o"]

dadosClient[0]=3
console.log(dadosClient[0])
console.log(dadosClient2[2])

