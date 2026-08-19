// O retorno de prompt()
let numero1, numero2, soma;

numero1 = Number(prompt("Digite o primeiro número:"));
numero2 = Number(prompt("Digite o segundo número:"));

soma = numero1 + numero2;

console.log(soma);

// Concatenação
let nome = "Lucas", sobrenome = "da Silva";

// Saída Esperada: Olá, Lucas da Silva! Seja bem-vindo(a)!
let msg1 = "Olá, " + nome + " " + sobrenome + "! Seja bem-vindo(a)!";
let msg2 = `Olá, ${nome} ${sobrenome}! Seja bem-vindo(a)!`;