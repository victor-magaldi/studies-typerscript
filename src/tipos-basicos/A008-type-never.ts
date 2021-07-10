// ela nunca retorna nada, geralmente não vai conter valores e laçar um error
export function createErro ():never{
   throw new Error("Error")
}

createErro()
