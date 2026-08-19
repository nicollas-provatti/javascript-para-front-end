// OPERADORES

// Aritméticos: +, -, *, /, %, %
let n1 = 10, n2 = 3, n3 = 4;
let resAritmetico;

resAritmetico = n1 + n2;
resAritmetico = (n1 + n2) * n3;

console.log("Resutaldo: " + resAritmetico);

// Relacionais
let resRelacional = n1 == n2;

let number = 10, string = "10";

resRelacional = number === string;

console.log("Resultado: " + resRelacional);

// Lógicos
let cond1 = true, cond2 = false;
let resLogico;

resLogico = cond1 && cond2;

console.log("Resultado: " + resLogico);

// Exemplo: Um número é perfeito se cumpre as restrições:
// - maior que 20
// - é par

let numero = 30;
let ehPerfeito = numero > 20 && numero % 2 == 0;
console.log(`O número ${numero} é perfeito ? ${ehPerfeito}`);

// Incremento e decremento
let num = 5;

num++;

console.log("Novo valor de num: " + num);