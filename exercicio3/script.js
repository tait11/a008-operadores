// a) 5 é maior que 20 e também é menor que 2;

//b) 5 é igual a 5 ou é igual a “5”;

//c) negação de vinte é maior que cinquenta

//d) negação de (vinte é maior que cinquenta)

const a = 5 > 20 && 5 < 2
console.log(a);

const b = 5 === 5 || 5 === "5"
console.log(b);

const c = !20 > 50
console.log(c);

const d = ! (20 > 50)
console.log(d)