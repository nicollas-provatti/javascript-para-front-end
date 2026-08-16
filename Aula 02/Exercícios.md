# 📝 Exercícios

---

## 🔹 Exercício 1 - Boas-vindas
**Descrição:** Crie um programa que solicite ao usuário os seguintes dados: nome, idade , altura, gênero e estudante.

**Exemplo de:**
- Entrada:
    ```css
    Qual é o seu nome ? Ana
    Qual é sua idade ? 25
    Qual a sua altura ? 1.67
    Qual o seu gênero ? F
    É estudante ? verdadeiro
    ```
- Saída:
    ```yaml
    Bem-vindo(a), Ana! 
    Seu Perfil
    Nome: Ana
    Idade: 25
    Altura: 1.67
    Gênero: F
    Estudante: verdadeiro
    ```

---

## 🔹 Exercício 2 - Desconto Progressivo
**Descrição:** Crie um programa que peça ao usuário o valor de uma compra. Se o valor for maior que 100, aplique 10% de desconto. Caso contrário o desconto será de 5%.


**Exemplo de:**
- Entrada:
    ```yaml
    Informe o valor da compra: 120
    ```

- Saída:
    ```css
    Valor original: R$ 120.00
    Desconto aplicado: R$ 12.00
    Valor final: R$ 108.00
    ```

---

## 🔹 Exercício 3 - Entrada no Evento
**Descrição:** Peça ao usuário sua idade usando `prompt`. Com base na idade, defina uma variável `permitido` que será **true** se a idade for maior ou igual a 18, e **false** caso contrário. Mostre com `alert` uma mensagem do tipo: `"Entrada permitida"` ou `"Entrada negada"`.

**Exemplo de:**
- Entrada:
    ```css
    Informe sua idade: 17
    ```

- Saída:
    ```yaml
    Entrada negada
    ```

---

## 🔹 Exercício 4 - Estoque Simples
**Descrição:** Crie um programa que simule um estoque. Peça ao usuário: quantidade atual no estoque (number) e a quantidade que deseja remover (number). Mostre no console: se a quantidade for válida (não negativa), mostre `"Estoque atualizado: X"`. Caso contrário, mostre `"Operação inválida: quantidade insuficiente no estoque"`.


**Exemplo de:**
- Entrada:
    ```css
    Estoque: 30
    Remover: 20
    ```

- Saída:
    ```yaml
    Estoque atualizado: 10
    ```

---

## 🔹 Exercício 5 - Exclusão de Conta
**Descrição:** Use o `confirm()` para perguntar ao usuário se ele deseja excluir sua conta. Se confirmar, use `alert()` para mostrar: `"Conta excluída com sucesso"`. Caso contrário, mostre: `"Ação cancelada pelo usuário"`.

**Exemplo de:**
- Entrada:
    ```css
    (confirm): Clica em "OK"
    ```

- Saída:
    ```yaml
    Conta excluída com sucesso.
    ```

---

## 🔹 Exercício 6 - IMC
**Descrição:** Crie um programa em JavaScript que solicite ao usuário seu nome, peso (em kg) e altura (em metros). Em seguida, calcule o IMC (Índice de Massa Corporal) utilizando a fórmula:

```ini
IMC = peso / (altura * altura)
```

Depois, utilize a função `confirm()` para exibir uma mensagem de confirmação com os dados inseridos.

Se o usuário confirmar que os dados estão corretos, exiba uma mensagem no formato: `"Nome, seu IMC é X"`, onde Nome é o nome informado e X é o IMC calculado.

Caso o usuário cancele, exiba a mensagem: `"Você saiu do programa."`

**Exemplo de:** 
- Entrada:
    ```css
    Nome: João
    Peso: 80
    Altura: 1.75
    ```

- Confirmação:
    ```css
    Seus Dados:
    Nome: João
    Peso: 80 kg
    Altura: 1.75 m
    Deseja continuar?
    ```

- Saída:
    ```yaml
    João, seu IMC é 26.12
    ```

---