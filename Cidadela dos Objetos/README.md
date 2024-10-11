# Cidadela dos Objetos

## Onboarding

Entender o conceito de objetos, agrupando elementos do mundo real, sem encher o código de variaveis. Vamos entender o conceito de extrutura de dados, para adentrarmos posteriormente ao mundo da orientação a Objetos.

# JSON

JSon é um agrupamento de dados para deixar diversos dados de forma organizada. Seria tipo um grupamento de dados.
Maneira de transferir dados de um lugar para outro de maneira agrupada.

## O que significar JSON?

Json é um valor simples composto por chame {}, com o objetido de transferir dados.

## Transferir Dados Json

Imagine a situação, pegamos diverso dados do usuário na tela e vamos encaminhar estas informações ao banco de dados.

Abaixo vemos uma função para transferir dados de um local para outro. Com Json, isto ficaria muito mais simples e facio:
````js
//Json - JavaScript Object Notation
// Chave e valor com o objetivo de transferir dados

let nome = "Felipe"
let age = 28
let products = ["mouse", "Teclado", "Monitor"];
let productsValues = [29, 290, 899];

generate(nome, productsw, age)

function generateInvoice(name, products, productsValues, Age){
  //Dificuldade de encaminhar diversos dados, com a complexidade de código.
}
````

Agora vamos transformar os dados acima em um json

````js
//json declaramos através de uma chave
let invoice = {
  name: "felipe",
  age: 28,
  products: {
    0: ["mouse", 20],
    2: ["monitor", 219],
    3: ["mouse", 899]
  },
  taxes: 98.98       
}

generateInvoice(invoice)

function generateInvoice(invoice){
  console.log(`O comprador é ${invoice.name}`);
  console.log(`A idade é ${invoice.age}`)
  console.log("--------------------")
  console.log(`Os produtos são ${invoice.products}`)
}
````

### Por que utilizar Json?

````js
//json declaramos através de uma chave
let invoice = {
  name: "felipe",
  age: 28,
  products: {
    0: ["mouse", 20],
    2: ["monitor", 219],
    3: ["mouse", 899]
  },
  taxes: 98.98       
}

generateInvoice(invoice)

function generateInvoice(invoice){
  console.log(`O comprador é ${invoice.name}`);
  console.log(`A idade é ${invoice.age}`)
  console.log("--------------------")
  for(let index in invoice.products){
    let[productName, productPrice] = invoice.products[index]
     console.log(` ${productName}, ${productPrice} `)
  }
 
}
````
A vantagém é poder transferir um grupo de dados de um lado para o outro. 

Json é um padrão universal de comunicação. Todas as linguagens entendem. Forma de dados de um lugar para outro.

## Classes e Objetos

Entendo a relação entre classe e objetos:

Exemplo da vovó e de bolus:
  - Fazer um bolo com uma forma. Temos 3 bolos diferentes (Morango, cenoura, creme de leite)
  - Cada bolo tem suas caracteristicas próprias, mas são bolos.
  - As formas, são classes.
  - Dentro da forma, temos um objeto.
  - A estrutura, o padrão é o mesmo. Com isto criamos um Objeto.
  - Toda classe eu posso declarar um objeto da mesma.
  - Instanciar um objeto é fazer um boloc com aquela forma.

Exemplos de objeto: Celular, microfone, garrafa da agua e assim por diante.

Uma pessoa é um objeto? No mundo real uma pessoa não é um objeto. 
Na programação uma pessoa é um objeto. 

- Exemplo de Objeto

````ts
class formaDeBolo {
  saborDaMassa: string;
  saborRecheio: string;

  constructor(saborDaMassa: string, saborRecheio: string) {
    this.saborDaMassa = saborDaMassa;
    this.saborRecheio = saborRecheio;
  }

  escrever() {
    console.log(`Um Delicioso bolo de ${this.saborDaMassa} com recheio de ${this.saborRecheio}`);
  }
}
let boloPremium = new formaDeBolo("chocolate", "nutella");
let boloFesta = new formaDeBolo("massa de chocolate", "Recheio de nutella");
boloFesta.escrever();
boloPremim.escrever();

````

## Diferença entre linguagens

- Java
````Java
public class FormaDeBolo {
    private String saborDaMassa;
    private String saborRecheio;

    public FormaDeBolo(String saborDaMassa, String saborRecheio) {
        this.saborDaMassa = saborDaMassa;
        this.saborRecheio = saborRecheio;
    }

    public void escrever() {
        System.out.println("Um Delicioso bolo de " + saborDaMassa + " com recheio de " + saborRecheio);
    }

    public static void main(String[] args) {
        FormaDeBolo boloFesta = new FormaDeBolo("massa de chocolate", "Recheio de nutella");
        boloFesta.escrever();
    }
}
````

- Python
````Python
class FormaDeBolo:
    def __init__(self, sabor_da_massa, sabor_recheio):
        self.sabor_da_massa = sabor_da_massa
        self.sabor_recheio = sabor_recheio

    def escrever(self):
        print(f"Um Delicioso bolo de {self.sabor_da_massa} com recheio de {self.sabor_recheio}")

bolo_festa = FormaDeBolo("massa de chocolate", "Recheio de nutella")
bolo_festa.escrever()
````

- C#
````C#
using System;

public class FormaDeBolo {
    private string saborDaMassa;
    private string saborRecheio;

    public FormaDeBolo(string saborDaMassa, string saborRecheio) {
        this.saborDaMassa = saborDaMassa;
        this.saborRecheio = saborRecheio;
    }

    public void Escrever() {
        Console.WriteLine($"Um Delicioso bolo de {saborDaMassa} com recheio de {saborRecheio}");
    }

    public static void Main(string[] args) {
        FormaDeBolo boloFesta = new FormaDeBolo("massa de chocolate", "Recheio de nutella");
        boloFesta.Escrever();
    }
}
````