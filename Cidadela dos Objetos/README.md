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

Json é um padrão universal de comunicação. Todas as linguagens entendem. 