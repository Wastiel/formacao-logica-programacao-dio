class heroi {   
  
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
      this.ataque = this.definirAtaque(this.tipo);      
    }

    definirAtaque(tipo){
        switch (tipo) {
            case 'Guerreiro':
                return "espada";
            case 'Mago':
                return "magia";
            case 'Monge':
                return "artes marciais";
            case 'Ninja':
                return "shuriken";
        }
    }
  
    atacar() {        
        console.log(`o ${this.tipo} atacou usando ${this.ataque}.`);   
      
    }
  }
  let heroiMago = new heroi("Willian", 18, "Mago");
  let heroiGuerreiro = new heroi("Willian", 18, "Guerreiro");
  let heroiNinja = new heroi("Willian", 18, "Ninja");
  let heroiMonge = new heroi("Willian", 18, "Monge");


  heroiMago.atacar();
  heroiGuerreiro.atacar();
  heroiNinja.atacar();
  heroiMonge.atacar();