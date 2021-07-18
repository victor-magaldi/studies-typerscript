// o user da linha 3 não quer dizer que precisa de um objeto igual o tipo User , e sim ter as chaves
// reqeridas
type VerifyUserFn = (user:User , sentValue:User)=>boolean
type User = {username: string , password:string}

const verifyUser: VerifyUserFn = (user, sentValue)=>{
   return user.username === sentValue.username && user.password === sentValue.password
}

// Aqui passamos uma chave a mais , e mesmo o TS inferindo o tipo ele não trava novas chaves
// ou seja o TS se preocupa  mais com o conteúdo do tipo
const bdUser = {username:"Victor", password:"12345678", testequalquer :'teste'}
const sendUser = {username:"Victor", password:"12345678"}
const loggedIn = verifyUser(bdUser, sendUser)
console.log(loggedIn)
