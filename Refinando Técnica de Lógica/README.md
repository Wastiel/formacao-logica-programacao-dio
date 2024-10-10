# Refinando técnica em Lógica através de problemas.

## Onboarding

Desafios práticos elevam o conhecimento e a resolução de problemas.

## Aprendizagem baseado em problemas

Aprender com base em problemas reais, focando no aprendizado na lógica de computação com pensamento computacional.
A lógica de programação é como se fosse resolução de problemas.

Pensamento computacional é o foco em resolver problemas, como focamos e construimos a solução do problema.

# Desafios Lógicos Solucionados:

# Desafio de Código: Jornada do Herói

# Descrição
Você é um jovem herói que embarca em uma jornada épica para derrotar o temido dragão que aterroriza o reino. No entanto, você precisa atravessar uma floresta perigosa para chegar à caverna do dragão. Cada passo é crucial, e sua jornada será determinada pela lógica afiada que você possuir.

## Tarefa
Escreva um algoritmo que simule a jornada do herói pela floresta. O herói começa em uma posição inicial e deve dar uma série de passos para atravessar a floresta até a caverna do dragão.

## Entrada
- A posição inicial do herói na floresta (um número inteiro).
- O número total de passos que o herói deve dar (um número inteiro).

## Saída
- Imprima a posição final do herói após dar a quantidade de passos especificada.

## Exemplos

| Entrada      | Saída                      |
|--------------|----------------------------|
| 2<br>3       | Posição final do herói: 5   |
| 15<br>3      | Posição final do herói: 18  |
| 10<br>6      | Posição final do herói: 16  |

Certifique-se de testar seu programa com esses exemplos e com outros casos possíveis.

````js
//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

// Para converter os valores inseridos na entrada, utilizamos a função JavaScript parseInt() que converte a parte inicial da string em um número inteiro.
const posicaoInicial = parseInt(gets());
const totalPassos = parseInt(gets());

//TODO: Calcule a posição final do herói:
const posicaoFinal = posicaoInicial + totalPassos;

// Imprime a posição final
print("Posicao final do heroi:", posicaoFinal);
````

# Desafio de Código: Pontos de Experiência

# Descrição
Você é um herói em um mundo mágico repleto de monstros e desafios. Sua missão agora é enfrentar inimigos e ganhar pontos de experiência (XP) para se tornar mais forte. A cada vitória, você ganha XP e se aproxima de se tornar um lendário campeão.

## Tarefa
Escreva um programa simples que simule o ganho de XP após derrotar um monstro. O programa deve calcular e exibir a quantidade de XP ganhos com base no nível do monstro e na dificuldade da batalha.

## Cálculo do XP
Para calcular a quantidade de XP ganhos, o programa precisa considerar o nível do monstro e a dificuldade da batalha. A fórmula utilizada é:

- **num1**: Nível do monstro. Quanto maior o nível, mais XP será ganho ao derrotá-lo.
- **num2**: Dificuldade da batalha, variando de 1 a 100. Quanto maior a dificuldade, maior será o XP ganho.
- **100**: Multiplicador constante que determina a escala geral de recompensa de XP.

## Entrada
- O nível do monstro (um número inteiro).
- A dificuldade da batalha, representada por um valor de 1 a 100 (um número inteiro).

## Saída
- Imprima a quantidade de XP ganhos após a batalha no formato: `Você ganhou {XP} XP!`

## Exemplos

| Entrada     | Saída                   |
|-------------|-------------------------|
| 45<br>40    | Você ganhou 180000 XP!   |
| 41<br>38    | Você ganhou 155800 XP!   |
| 15<br>20    | Você ganhou 30000 XP!    |

Certifique-se de testar seu programa com esses exemplos e outros casos possíveis.

````js
//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

// Entrada de dados. Lembre-se: O parseInt(()) é importante para a conversão dos valores de entrada(String) para um valor numérico(int).
let num1 = parseInt(gets());
let num2 = parseInt(gets());

//TODO: Implemente a lógica para exibir o xpGanho:
const xpGanho = num1 * num2 * 100;

// Imprime a quantidade de XP ganho
print("Voce ganhou " + xpGanho + " XP!");
````

# Desafio de Código: Capturando Pokémons Iniciais

# Descrição
No mundo dos jogos Pokémon, os treinadores começam sua jornada escolhendo um dos quatro Pokémons iniciais: Bulbasaur, Charmander, Pikachu e Mewtwo. Seu desafio é criar uma solução que permita ao jogador escolher um dos Pokémons iniciais e exibir uma mensagem de boas-vindas com o Pokémon escolhido.

## Entrada
Você receberá um número inteiro que representa a escolha do treinador:
- 1 para Bulbasaur,
- 2 para Charmander,
- 4 para Pikachu,
- 5 para Mewtwo.

## Saída
A saída deve ser uma mensagem de boas-vindas que inclua o nome do Pokémon escolhido no formato: 


## Exemplos

| Entrada                         | Saída                                                  |
|----------------------------------|--------------------------------------------------------|
| Escolha o seu Pokémon: 1         | Você escolheu o Bulbasaur como seu Pokémon inicial.     |
| Escolha o seu Pokémon: 2         | Você escolheu o Charmander como seu Pokémon inicial.    |
| Escolha o seu Pokémon: 4         | Você escolheu o Pikachu como seu Pokémon inicial.       |
| Escolha o seu Pokémon: 5         | Você escolheu o Mewtwo como seu Pokémon inicial.        |

Certifique-se de testar seu programa com esses exemplos e outros casos possíveis.

````js
//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

// Entrada de dados. Lembre-se: O parseInt(()) é importante para a conversão dos valores de entrada(String) para um valor numérico(int).
let escolhaDoTreinador = parseInt(gets());
let pokemonEscolhido; 

//TODO: Implemente as condições necessárias para a solução do desafio. Utilize a tabela de exemplos para identificar a escolha do treinador:
if ( escolhaDoTreinador === 1) {
    pokemonEscolhido = "Bulbasaur";
} else if ( escolhaDoTreinador ===  2) {
    pokemonEscolhido = "Charmander";
} else if ( escolhaDoTreinador === 4) {
    pokemonEscolhido = "Pikachu";
} else if ( escolhaDoTreinador === 5){
    pokemonEscolhido = "Mewtwo";
}

//Imprime o Pokémon escolhido:
if (pokemonEscolhido) {
    print("Voce escolheu o " + pokemonEscolhido + " como seu Pokemon inicial.");
}
````

# Desafio de Código: Coleta de Tesouros no Dungeon

# Descrição
Sua missão é vasculhar as salas da masmorra em busca de recompensas lendárias e desafios perigosos. Cada sala pode conter monstros formidáveis, tesouros preciosos ou ambos. Use suas habilidades estratégicas para enfrentar as ameaças e coletar os tesouros!

## Tarefa
Escreva um programa que simule sua jornada heróica pela masmorra. O programa deve percorrer cada sala e verificar se há tesouros ou monstros. Se você encontrar um tesouro, colecionará a recompensa. Se encontrar um monstro, terá que derrotá-lo para continuar.

## Atenção
Utilize a função `.includes()` do JavaScript para verificar se um número (representando a sala atual) está presente nos arrays `salasComTesouro` e `salasComMonstro`.

## Entrada
- O número total de salas no dungeon (um número inteiro).

## Saída
- Sempre que encontrar um tesouro, imprima: `"Tesouro na sala X!"`.
- Sempre que encontrar um monstro, imprima: `"Monstro na sala X!"`.

## Exemplos

| Entrada | Saída                             |
|---------|-----------------------------------|
| 3       | Tesouro na sala 2!<br>Monstro na sala 3! |
| 4       | Tesouro na sala 2!<br>Monstro na sala 3!<br>Tesouro na sala 4! |
| 2       | Tesouro na sala 2! |

Certifique-se de testar seu programa com esses exemplos e outros casos possíveis.

````js
//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

// Entrada de dados. Lembre-se: O parseInt(()) é importante para a conversão dos valores de entrada(String) para um valor numérico(int).
const totalSalas = parseInt(gets());
//Aqui temos uma demonstração de array com valores já predefinidos:
const salasComTesouro = [2, 4, 7];
const salasComMonstro = [3, 6, 8];

//Aqui temos uma forma de loop para percorrer cada sala da masmorra:
for (let sala = 1; sala <= totalSalas; sala++) {
//Utilizamos o .includes() para verificar se um número está presente nos arrays:
    const temTesouro = salasComTesouro.includes(sala);
    const temMonstro = salasComMonstro.includes(sala);

//TODO: Agora implemente uma condição necessária para verificar e exibir se há tesouro na sala e se há montro na sala:
    if ( temTesouro > 0 ) {
        print("Tesouro na sala " + sala + "!");
    } else if ( temMonstro > 0 ) {
        print("Monstro na sala " + sala + "!");
    }
}
````

# Desafio de Código: Geração de Biomas em um Mundo de Blocos

# Descrição
Você é um mestre construtor em um mundo de blocos e tem a tarefa de gerar biomas em diferentes regiões do mundo. Cada bioma tem características únicas, como tipos de solo, vegetação e clima.

## Tarefa
Sua tarefa é coletar minérios enquanto ataca uma rocha com sua picareta. Use loops e lógica de programação para representar cada golpe na rocha e determinar qual minério foi obtido.

## Entrada
- O programa solicitará que você digite um número inteiro positivo representando a quantidade de golpes que você deseja dar com a picareta.

## Saída
- Para cada golpe que você der, o programa exibirá uma mensagem indicando o resultado do golpe no seguinte formato: 

- 1: Carvão
- 2: Ferro
- 3: Diamante
- 4: Pedra

## Exemplos

| Entrada | Saída                                |
|---------|--------------------------------------|
| 4       | 1: Carvão<br>2: Ferro<br>3: Diamante<br>4: Pedra |
| 3       | 1: Carvão<br>2: Ferro<br>3: Diamante              |
| 2       | 1: Carvão<br>2: Ferro                             |

Certifique-se de testar seu programa com esses exemplos e outros casos possíveis.


````js
//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

// Lê a quantidade de golpes informada pelo usuário. 
// O parseInt(()) vai converter os valores de entrada(string) para um valor numérico(Int).
const quantidadeGolpes = parseInt(gets());

// TODO: Defina aqui os tipos de minerais Carvao, Ferro, Diamante e Pedra
let minerais = ["Carvao", "Ferro", "Diamante", "Pedra"];

// Loop para cada golpe, de 1 até a quantidade informada
for (let i = 1; i <= quantidadeGolpes; i++) {
  // Calcula o índice do mineral usando o operador de módulo (%) para garantir que o índice esteja dentro do tamanho do array
  let minaIndex = (i-1) % minerais.length;
  
  // TODO: Agora exiba o índice i, concatene com o caractere ":", após, concatene com tipo de minerais[minaIndex]:
  print(  i + ": " + minerais[minaIndex]  );
}
````
# Desafio de Código: Combinando Nomes de Pokémons

# Descrição
Imagine um universo onde você é um Mestre Pokémon com o poder de criar novas criaturas através da combinação de nomes. Seu algoritmo é a chave para dar vida a esses seres incríveis. Você receberá a primeira parte do nome de um Pokémon e sua tarefa é completá-la com o sufixo mágico adequado, revelando o nome completo do Pokémon.

## Tarefa
Sua missão é criar uma função extraordinária chamada `combinarNomePokemon`. Essa função possui um toque mágico que transforma uma entrada simples em algo verdadeiramente especial.

## Entrada
- A entrada consistirá em uma única string representando a primeira parte (prefixo) do nome de um Pokémon.

## Saída
- A função deve retornar uma nova string que é a combinação da parte inicial (prefixo) do nome do Pokémon com o sufixo final do nome, formando o nome de Pokémon completo.

## Exemplos

| Entrada | Saída      |
|---------|------------|
| Bulba   | Bulbasaur  |
| Ivy     | Ivysaur    |
| Venu    | Venusaur   |

Certifique-se de testar seu programa com esses exemplos e outros casos possíveis.



````js
//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

// TODO: Defina uma função chamada "combinandoNomesPokemons" que recebe um parâmetro chamado (palavra);
// TODO: Dentro da função, crie uma variável chamada "palavraPokemon" que é formada pela concatenação da "palavra" com a string "saur";  
// TODO: Após a váriavel, retorne a palavra pokemon; 

// Entrada da palavra usando o gets():
var nomeEntrada = gets();

// Chamando a função "combinandoNomesPokemons" com o nome pokemon informado e armazenando o resultado na variável "palavraGerada":
var palavraGerada = combinandoNomesPokemons(nomeEntrada);

function combinandoNomesPokemons(nomeEntrada){
  return nomeEntrada + "saur";
}

// Exibindo a palavra gerada:
print(palavraGerada);
````

# Desafio de Código: Gerenciamento de Itens Mágicos

# Descrição
Você é um aventureiro em um mundo mágico cheio de perigos e monstros. Durante suas missões, você coleta diversos itens mágicos, cada um com seus próprios atributos e habilidades especiais. Agora, você está desenvolvendo um sistema aprimorado para gerenciar esses itens. Neste novo sistema, você pode criar diferentes tipos de itens mágicos, como armas, armaduras, poções, entre outros. Cada tipo de item terá atributos específicos e contribuirá de maneiras únicas para suas aventuras.

## Tarefa
Crie um objeto que represente um item mágico personalizado. O objeto deve ter atributos como tipo de item, dano e resistência, de acordo com o tipo escolhido. Além disso, crie uma função que calcule o dano causado por um item durante um combate, levando em consideração o tipo de item.

## Entrada
- Peça ao usuário para digitar o tipo do item mágico que deseja criar, o dano e a resistência.

## Saída
- Imprima o tipo do item, o dano, a resistência e o dano em combate.
- Use a função de cálculo de dano para imprimir o dano causado por esse item em um combate simulado.
  - Quando o tipo do item for igual a 'arma', o dano deve ser multiplicado por dois (`this.dano * 2`).
  - Quando não for uma arma, o dano retornado será o valor normal (`this.dano`).

## Exemplos

| Entrada | Saída                                                                 |
|---------|----------------------------------------------------------------------|
| Espada  | Tipo: Espada<br>Dano: 200<br>Resistencia: 300<br>Dano em combate: 200 |
| Cajado  | Tipo: Cajado<br>Dano: 600<br>Resistencia: 800<br>Dano em combate: 600 |
| Arco    | Tipo: Arco<br>Dano: 900<br>Resistencia: 500<br>Dano em combate: 900   |

Certifique-se de testar seu programa com esses exemplos e outros casos possíveis.


````js
//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

// Definição da classe ItemMagico
class ItemMagico {
//TODO: Crie adequadamente um construtor que receba todos os atributos referente ao item mágico:
  constructor(tipo, dano, resistencia) {
    this.tipo = tipo;
    this.dano = dano;
    this.resistencia = resistencia;
  }

  calcularDano() {
    return this.tipo === 'arma' ? this.dano * 2 : this.dano;
  }
}

// Solicita ao usuário para digitar o tipo do item mágico, o dano no item e a resistência do item
const tipoItem = gets();
const danoItem = parseInt(gets());
const resistenciaItem = parseInt(gets());

//TODO: Crie o de um objeto ItemMagico personalizado com base no tipo escolhido
const itemPersonalizado = new ItemMagico(tipoItem, danoItem, resistenciaItem);

// TODO: Imprima os atributos do item personalizado
print("Tipo: " + tipoItem );
print("Dano: " + danoItem);
print("Resistencia: " + itemPersonalizado.resistencia);

// Calcula e imprime o dano causado pelo item personalizado em um combate simulado
const danoTotal = itemPersonalizado.calcularDano();
print("Dano em combate: " + danoTotal);
````
