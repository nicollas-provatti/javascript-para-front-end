let nome;
let idade;
let altura;

// Entrada de Dados (navegador)
nome = prompt("Qual o seu nome ?");
idade = prompt("Qual a sua idade ?")
altura = prompt("Qual a sua altura ?");

// Saída de Dados (navegador)
alert("Nome: " + nome);
alert("Idade: " + idade);
alert("Altura: " + altura);

alert("Nome: " + nome +
  "\nIdade: " + idade +
  "\nAltura: " + altura
);

// Entrada de Dados (navegador)
let resposta = confirm("Aceita todos os termos do site ?");
console.log(resposta);
