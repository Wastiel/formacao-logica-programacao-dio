# Dominando Estrutura de Controle.

## Introdução ao módulo

Estruturas de controle, auxiliam a ter controle sobre a ferramenta e o que ela deve fazer ou não fazer através de estruturas de decisão.

## Trabalhando com Estruturas Condicionais (If, else if, else)

IF: QUando você faz uma pergunta para o computador e ele vai executar a transação somente se a condição for verdadeira.

[w3schools](https://www.w3schools.com/typescript/trytypescript.php?filename=demo_helloworld)

- IF
````js
// botao que liga e desliga
let ehLigado = true;

// para que o conteudo do if aconteca, tem que ser uma expressão verdadeira

if(ehLigado){
console.log("Executou o comando");
}

// exemplo da lista de compras, so compra Leite se ouver hovos. 
let possuiOvos = true;
let itensComprados = "";

if(possuiOvos){
itensComprados = "Leite"
}

console.log("Item comprado: " + itensComprados)
````

- else
````js
//ELSE

// exemplo da lista de compras, so compra Leite se ouver hovos. 
let possuiOvos = false;
let itensComprados = "";

// So vai trazer lasanha congelada se não tiver ovos. 
if(possuiOvos){
itensComprados = "Leite"
}else{
console.log("Passou na sessão de congelados");
itensComprados = "Lasanha congelada";
}

console.log("Item comprado: " + itensComprados);
````

- Else If
````js
//If, condição atendaida
// Else, Quando o If nao for atendaido
// Else IF, acontece quando nao atende a primeira condição e atende a segunda condição

// Nível de fome
let nivelDeFome = 1;

if(nivelDeFome === 1){
	console.log("Você está com pouca fome!");
}else if(nivelDeFome === 2){
	console.log("Você está com muita fome!")
}else{
	console.log("Você comeria mais que o pica pau!")
}

console.log("Fim ");
````

## Trabalhando com Estruturas de decisão (Switch Cas)

Switch Case, utiliza com várias opções para uma determinada pergunta. Como fossemos utilizar uma estrutura de decisão em dias da semana. 

- Switch/Case/break/default
````js
// estutura de decisão
// switch/case/break/default
// Posso utilizar o switch case com numeros
let fruta = "banana";

switch(fruta){
	case "Laranja":
    console.log("Suco de Laranja");
    break;
    
    // duas palavras no mesmo case
    case "banana":
    case "morango":
    console.log("Vitamina de banana");
    break;    
    
    case "Maça":
    console.log("Vitamina de banana");
    break;    

    default:
    console.log("Suco Genérico");    
}
````

Switch Case existe em todas as linguagens, com pouocas diferentes. 

## For e While, laços de repetição

Laço de repetição vai se repetir até determinada condição acontecer. 

- for
````js
// for
// Contar até 3

for(let contador = 0; contador <4; contador ++){
    console.log(contador);
}
// exemplo de um jogo com personagem esta com 0 pontos de vida. Ele vai tomar uma poção para recuperar vida.
let pontosDeVida = 0;
for(let i = 0; i<11; i++){
    pontosDeVida +=1;
    console.log("Tomou poção mágica" + i);

}
console.log(pontosDeVida + " Totais ")
````

- while
````js
// while, alternativa ao for com uma regra só
// Controlamos o contador
let i = 0;

while(i < 3){
    console.log(i);
    i++;
}
````

- Do While
````js
// do while, alternativa ao for com uma regra só
// Primeiramente ele faz e depois ele verificar. 
let i = 0;

do{
    console.log(i);
    i++;
}while(i < 3)
````

Laços de repetição são altamente executados. 

## Desafio Classificador de nível do Herói

- Desafio do Herói!

- Pré Requisitos
    - Editor 
    - Node JS
    - GitHub

Descritivo: 

# 1️⃣ Desafio Classificador de nível de Herói

**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetiçãos
- Estruturas de decisões

## Objetivo

Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante

## Saída

Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**"
