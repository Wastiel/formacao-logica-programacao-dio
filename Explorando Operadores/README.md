# Explorando Operadores

## Introdução ao módulo
Montanha de operadores: Os operadores vão nos auxiliar ajudar a escrever expressões para os nossos softwares. Vamos ver estas expresões diversas vezes ao longo do curso. 

O curso é ministrado pelo instrutor Felipe Aguiar.

## Sobre operadores

Operadores e expressões: Servem para trabalhar os dados inseridos pelos usuários. Assim como verificações o munipulações. Transformar dados lançados pelo usuários. Para fazer um tipo de operação

#### Exemplo de operadores:

- Matemáticos: Servem para realizar operações matematicas.

| Operador | Descrição                   | Exemplo               |
|----------|-----------------------------|-----------------------|
| +        | Adição                      | `let result = 5 + 3;` |
| -        | Subtração                   | `let result = 8 - 2;` |
| *        | Multiplicação               | `let result = 4 * 6;` |
| /        | Divisão                     | `let result = 10 / 2;`|
| %        | Módulo (resto da divisão)    | `let result = 10 % 3;`|

- Operadores Relacionais: Para podermos verificar relações com outros. 

| Operador | Descrição              | Exemplo                           |
|----------|------------------------|-----------------------------------|
| ==       | Igual a                | `let isEqual = (x == y);`         |
| !=       | Diferente de           | `let isNotEqual = (x != y);`      |
| >        | Maior que              | `let isGreater = (x > y);`        |
| <        | Menor que              | `let isLess = (x < y);`           |
| >=       | Maior ou igual a       | `let isGreaterOrEqual = (x >= y);`|
| <=       | Menor ou igual a       | `let isLessOrEqual = (x <= y);`   |

- Operadores Lógicos: Fazer verificações lógicas, retornando true or false

| Operador | Descrição      | Exemplo                        |
|----------|----------------|--------------------------------|
| &&       | AND lógico      | `if (condition1 && condition2)`|
| \|\|     | OR lógico       | if (condition1 || condition2)|
| !        | NOT lógico      | `if (!condition)`              |


- Atribuição: Guardar valores dentro de uma variavel

| Operador | Descrição                | Exemplo                            |
|----------|--------------------------|------------------------------------|
| =        | Atribuição                | `let x = 5;`                      |
| +=       | Adição e atribuição       | `let num = 10; num += 2;`         |
| -=       | Subtração e atribuição    | `let num = 10; num -= 3;`         |
| *=       | Multiplicação e atribuição| `let num = 5; num *= 4;`          |
| /=       | Divisão e atribuição      | `let num = 10; num /= 2;`         |
| %=       | Módulo e atribuição       | `let num = 10; num %= 3;`         |

- Incremento/Decremento: Para adicionar ou diminui valores em variaveis. 

| Operador | Descrição   | Exemplo                            |
|----------|-------------|------------------------------------|
| ++       | Incremento  | `let counter = 0; counter++;`      |
| --       | Decremento  | `let counter = 5; counter--;`      |


#### Operadores Matemáticos

Comandos executados são sequênciais a programação

Operadores Aritiméticos
- Soma e Subtração (- e +)
````js
let idade = 30;
console.log("Operação de adição a idade: " + idade);
// operador de soma, serve para somar dois números e também concatenar informações
idade = 30 + 6;
console.log("Operação de adição: " + idade);
let primeiroNumero = 1023
let secundoNumero = 23; 
// Operador de subrtração
console.log(primeiroNumero - secundoNumero)
````
- Multiplicador (*)
````js
let precoProduto = 100.99; 
let valorComTaxa = precoProduto * 2;

console.log("Valor com Taxa: " + valorComTaxa);

let multiplicador = 4; 
let multiplicando = 12;
let produto = multiplicador * multiplicando
console.log("Valor com Taxa: " + produto);
````
- Divisão (/)
````js
let notaDoMercado = 50; 
let pessoasParaDividir = 2; 
let resultado = precoProduto / pessoasParaDividir;
console.log('operação de divisão: ' + resultado);
//Resto da divisão: 
let calculo = 10%3;
console.log(calculo)
````

- Incremento/Decremento
````js
let contador = 1
// '++' incremento
contador ++;
console.log(contador)
// '--' decremento
contador --; 
console.log(contador)
````

- Calcular e atribuir
````js
// Calcular e atribuir
// Soma
let preco = 10;
preco += 5
console.log(preco)
//Subtracao
preco -= 5
console.log(preco)
// Mesma coisa que isto:
preco = preco + 5
preco = preco - 5
````

- Expressoes Matematicas
````js
// Segue os escopos
let resultado = 2 * ((5+5) - 10);
console.log(resultado);
````

## Trabalhando com operadores de comparação

Operadores de comparação, são operadores que comparam algo. Isto é muito comum em qualquer operação. 

#### Operadores de comparação

- Operação de igualdade
````js
let numero = "1"
console.log(numero == 1)

//= é atribuição
//== é para comparar o valor
//=== é para comparar valor e formato
````

- Operação de diferença
````js
let numero = "Apple"
console.log(numero !== "Samsung")

// !== é diferente para comparação
// !=== é para comparar valor e formato

let cpfBloqueado = "123.456.789-22"
let cpfUsuario = "222.111.222-09"
let ehBloqueado = cpfBloqueado === cpfUsuario
console.log("Usuario está barrado ?"  + ehBloqueado)
````

- Maior e Menor
````js
// comparação de maior ou igual
let idadeMinima = 18
let idadeUsuario = 17
let idadePermitidaValida = idadeUsuario >= idadeMinima;
console.log(idadePermitidaValida);
// Menor ou igual
let idadeDeCorte = 50
let idadeUsuario = 45
let resultadoEhTerceiraIdade = idadeDeCorte <= idadeUsuario>
console.log(resultadoEhTerceiraIdade);
````

## Operadores Lógicos 

Operadores lógicos são utilizados para perguntas compstas, com condicionais. "Algo ou algo", ou "algo e algo" e este resultado é obiido dentro destas analises de operadores lógicos.

- Operador And
````js
// and (&&) verifiação de idade

let idade = 18
let vistoVerificado = true
console.log((idade >= 18) &&(vistoVerificado ===true));

// and (&&) - 100 moeadas coletadas e 1 item estrela

let moedasColetadas = 100
let item = "estrela"
let resultado =(moedasColetadas >= 100) && (item === "estrela")
console.log(resultado);

````

- Operadores || (ou)
````js
//OR (||) - Nosso boneco só pode sair se tiver sem chuva ou com guarda Chuva

let tempo = "sol"
let item = "guarda chuva"
let podeSair = (tempo !== "chuva") || (item === "guarda chuva")
console.log("Nosso personagem pode sair? " + podeSair)
````

- Operador Lógico Not
````js
//Not (!) nega uma afirmação

let tempo = "chuva"
let resultado = tempo !== "chuva"
console.log(resultado)

let tempo = "chuva"
let horario = 8
let resultado = !((tempo !== "chuva") && (horario >6>))
console.log(resultado)
````

Perguntar ao código não faz muito sentido, mas ajuda a entender os operadores.

## Encerramento do módulo

Em primeira vizao, operadores aparentam ser complexos. mas com o tempo entendemos e começamos aplicar logaicamente os operadores. 