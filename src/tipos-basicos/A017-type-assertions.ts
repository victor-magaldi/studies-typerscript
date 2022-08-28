const body = document.querySelector('body');
// aqui teria que colocar o if por causa que body pode ser null
if (body) body.style.background = 'red';

//Non-null-assertion(não recomendado mais)
const body2 = document.querySelector('body')!;
body2.style.background = 'green';

//type-assertion (usar ao ter total certeza que o body existe)
const body3 = document.querySelector('body') as HTMLBodyElement;
body3.style.background = 'blue';

//type-assertion (usado para corrigir a inferência de ELEMENT para HTMLInputElement)
const input = document.querySelector('.input') as HTMLInputElement;
input.value = 'teste';
input.focus();

//type-assertion só pode ser usado para subtipos , exemplo não posso transformar um elemento html em number
// ex: document.querySelector('body') as Number
const body4 = (document.querySelector('body') as unknown) as number;
