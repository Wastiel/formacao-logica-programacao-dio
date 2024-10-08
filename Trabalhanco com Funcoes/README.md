# Trabalhando com funções

## Onboarding

Entender funções na partica com a linguagem javascript que pode ser utilizado por qualquer linguage.
Uma função nada mais é do que uma pequena fabrica onde você vai enviar coisas ou processar algumas cosias para você. Isto deixa o software mais organziados.

## Sobre funções

Exenplo sobre: 

Fazer uma torrada: Montamos um pão, colocamos em uma torradeira e posterior a sai o pao torrado. A idéia aqui é que a função da torradeira é torrar o pão. 

A principal ideia é algo que recebe algo e retorna algo ou altera algo. 

Uma função sempre vai ser declarada de forma simples
````js
function função(){

}
````

### Chamando uma função

````js
//chamando função
torrar();
torrar();

//Declarando uma função
function torrar(){
	console.log("torrando pão");
    injetarPao();
}

funcion injetarPao(){
    console.log("preparando para injetar o pão");
    console.log("Finalizado");
}
````

### Considerações ao trabalhar com funções

- Nome de funções nao começa com numeros.
- Evite nome com espaços.
- Funções são ações, coloque com nome de verbos. 
- Função que execute somente uma ação, mais facil de dar manutenção. 
- Chamamos todas as funções necessarias através de uma função principal.
- Vizualmente boa identação de um nível. 
- Metodos também são funções.

### Códigos de funções em outras linguagens

- Funções em varias linguagens.

- JavaScript
````js
function enviarDados(){
	let nomeDoBanco = "Banco de dados";
    console.log("salvando dados em: " + nomeDoBanco);    
}

enviarDados();
````

- Python
````py
def enviar_dados():
    nome_do_banco = "Banco de dados"
    print("salvando dados em: " + nome_do_banco)

enviar_dados()
````

- Java
````java
public class Main {
    public static void enviarDados() {
        String nomeDoBanco = "Banco de dados";
        System.out.println("salvando dados em: " + nomeDoBanco);
    }

    public static void main(String[] args) {
        enviarDados();
    }
}
````

- C#
````C#
using System;

class Program {
    static void EnviarDados() {
        string nomeDoBanco = "Banco de dados";
        Console.WriteLine("salvando dados em: " + nomeDoBanco);
    }

    static void Main(string[] args) {
        EnviarDados();
    }
}
````

## Funções com Parametros

Uma torradeira tem um paramtro de entrada que seria no nosso exemplo anterior um pão.

````js
//Função com parametro
torrar("pão de forma");
torrar("pão integral");

function torrar(pao){	
    console.log("torrada feita com " + pao);    
}
````

### Escopo de variaveis com multplos parametros

Temos que ter cuidado que as variavies dentro de uma função, tem o escopo para a determinada função e não conseguem ser utilizadas fora do escopo. 

- let: dentro do escopo
- var: variavel global, não é muito recomendado

Podemos passar dois parametros
````js
//Função com parametro
torrar("pão de forma", "felipe");
torrar("pão integral", "Janaina");

function torrar(pao, nome){	
    console.log("torrada feita com " + pao);    
    console.log("ela é um pedido de " + nome);    
}
````

- Podemos ter funções com parametros padrões, conforme abaixo e é sempre uma boa pratica deiar este parametro para o final, pois a função em js nao aceita parametro em branco no meio de parametros. Caos seja muito necessário ter no meio do fluxo, passar undefined.

````js
//Função com parametro
torrar("pão de forma", 10.90,  "felipe");
torrar("pão integral", 10.90, undefined);
torrar("pão integral", 15.90);

function torrar(pao,  valor, nome = "Cliente"){	
    console.log("torrada feita com " + pao);    
    console.log("ela é um pedido de " + nome);    
    console.log("O valor é de " + nome);  
}
````
### Funções em outras linguagens

- Python
````Py
def torrar(pao, valor, nome="Cliente"):
    print(f"torrada feita com {pao}")
    print(f"ela é um pedido de {nome}")
    print(f"O valor é de {valor}")

torrar("pão de forma", 10.90, "Felipe")
torrar("pão integral", 10.90)
torrar("pão integral", 15.90)
````

- Java
````java
public class Main {

    public static void torrar(String pao, double valor, String nome) {
        if (nome == null) {
            nome = "Cliente";
        }
        System.out.println("torrada feita com " + pao);
        System.out.println("ela é um pedido de " + nome);
        System.out.println("O valor é de " + valor);
    }

    public static void main(String[] args) {
        torrar("pão de forma", 10.90, "Felipe");
        torrar("pão integral", 10.90, null);
        torrar("pão integral", 15.90);
    }
}
````
- C#
````C#
using System;

class Program {

    static void Torrar(string pao, double valor, string nome = "Cliente") {
        Console.WriteLine("torrada feita com " + pao);
        Console.WriteLine("ela é um pedido de " + nome);
        Console.WriteLine("O valor é de " + valor);
    }

    static void Main(string[] args) {
        Torrar("pão de forma", 10.90, "Felipe");
        Torrar("pão integral", 10.90);
        Torrar("pão integral", 15.90);
    }
}
````

- Passar o texto sem concatenção com interpolação de strings:
````js
createStringConnection("db_products", "felipe", "9876")

function createStringConnection(databaseName, user, pass){
    console.log(`connect:DBCONNECT;user=${user};pass=${pass};initial_database=${databaseName}`)
}
````

## Funções com retorno

Funções com retorno são funções que retornam valores ou valores de saída para a tela. 

- No exemplo da torradeira, a mesam pode ter uma saida.

- Abaixo temos um exemplo de resultado de uma função soma com return.

````js
let resultado = soma(5,5);

console.log("O resultado desta função é " + resultado);

function soma(numA, numB){
let somatorio = numA + numB
return somatorio;
}
````
 Dentro de uma função com return, podemos retornar um valor ou um objeto. Podemos retornar uma expressão. 

- Uma função de retorno simples de nomes na primeira posição com split:

 ````js
 let userName = getFirstName("Felipe Amaral Silveira", " ");

console.log("Seja bem vindo " + userName);

userName = getFirstName("Joao-Amaral-Silveira", "-");

console.log("Seja bem vindo " + userName);

function getFirstName(name, splitChar){
	//quebrar um testo por espaços
	let firstName = name.split(splitChar)[0]
    return firstName;
}
 ````

 ### Funções com parametros em outras linguagens

- Python
````Py
def get_first_name(name, split_char):
    # quebrar um texto por espaços ou outro caractere
    first_name = name.split(split_char)[0]
    return first_name

# Testando a função
user_name = get_first_name("Felipe Amaral Silveira", " ")
print("Seja bem-vindo " + user_name)

user_name = get_first_name("Joao-Amaral-Silveira", "-")
print("Seja bem-vindo " + user_name)

````

- Java
````java
public class Main {

    public static String getFirstName(String name, String splitChar) {
        // quebrar um texto por espaços ou outro caractere
        String firstName = name.split(splitChar)[0];
        return firstName;
    }

    public static void main(String[] args) {
        // Testando a função
        String userName = getFirstName("Felipe Amaral Silveira", " ");
        System.out.println("Seja bem-vindo " + userName);

        userName = getFirstName("Joao-Amaral-Silveira", "-");
        System.out.println("Seja bem-vindo " + userName);
    }
}

````
- C#
````C#
using System;

class Program {
    static string GetFirstName(string name, string splitChar) {
        // quebrar um texto por espaços ou outro caractere
        string firstName = name.Split(splitChar)[0];
        return firstName;
    }

    static void Main() {
        // Testando a função
        string userName = GetFirstName("Felipe Amaral Silveira", " ");
        Console.WriteLine("Seja bem-vindo " + userName);

        userName = GetFirstName("Joao-Amaral-Silveira", "-");
        Console.WriteLine("Seja bem-vindo " + userName);
    }
}
````
Instruções para entrega
 # 2️⃣ Calculadora de partidas Rankeadas
**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções

## Objetivo:

Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal

## Saída

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"

