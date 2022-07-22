let num1 = Number (prompt('Digite um número aleatório'));
let num2 = Number (prompt('Digite um número'));

let divisivel1 = num1%num2
console.log(divisivel1);

let divisivel2 = num2%num1
console.log(divisivel2);

console.log('O primeiro número é maior que o segundo?', num1>num2)
console.log('O primeiro número é igual ao segundo?', num1===num2)

console.log('O primeiro número é divisível pelo segundo?', divisivel1===0)
console.log('O segundo número é divisível pelo segundo?', divisivel2===0)