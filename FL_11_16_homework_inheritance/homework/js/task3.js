function Pokemon() {
    this.name = '';
    this.specie = '';
    this.type ='';
    this.flying = false;

    this.getType = () => {
        return this.type;
    };

    this.getSpecie = () => {
        return this.specie;
    };

    this.canFly = () => {
        return this.flying;
    };

    this.getPokemonType = () => {
        return this.name;
    };
}

function Charmander(){
    Pokemon.call(this);
    this.specie = 'Lizard Pokémon';
    this.type = 'Fire';
    this.evolve = () => new Charmeleon();
}

function Charmeleon() {
    Pokemon.call(this);
    this.specie = 'Flame Pokémon';
    this.type = 'Fire';
    this.evolve = () => new Charizard();
}

function Charizard() {
    Pokemon.call(this);
    this.specie = 'Flame Pokémon';
    this.type = 'Fire';
    this.flying = true;
    this.evolve = () => this;
}

Charmander.prototype = Object.create(Pokemon.prototype);
Charmander.prototype.constructor = Charmander;

Charmeleon.prototype = Object.create(Pokemon.prototype);
Charmeleon.prototype.constructor = Charmeleon;

Charizard.prototype = Object.create(Pokemon.prototype);
Charizard.prototype.constructor = Charizard;

const charmander = new Charmander();
const charmeleon = new Charmeleon();
const charizard = new Charizard();

console.log(charmander.getType());
console.log(charmander.getType() === charmeleon.getType());
console.log(charmeleon.getType() === charizard.getType());

console.log(charmander.evolve().constructor === Charmeleon);
console.log(charmeleon.evolve().constructor === Charizard);

console.log(charmander.getSpecie());
console.log(charmeleon.getSpecie());
console.log(charizard.getSpecie() === charmeleon.getSpecie());

console.log(charmander.canFly());
console.log(charmander.canFly() === charmeleon.canFly());
console.log(charizard.canFly());

function Pichu() {
    Pokemon.call(this);
    this.name = 'Pichu';
    this.specie = 'Mouse Pokémon';
    this.type = 'Electric';
    this.evolve = () => new Pikachu();
}

function Pikachu() {
    Pokemon.call(this);
    this.name = 'Pikachu';
    this.specie = 'Mouse Pokémon';
    this.type = 'Electric';
    this.evolve = () => new Raichu();
}

function Raichu() {
    Pokemon.call(this);
    this.name = 'Raichu';
    this.specie = 'Mouse Pokémon';
    this.type = 'Electric';
    this.flying = true;
    this.evolve = () => this;
}
Pichu.prototype = Object.create(Pokemon.prototype);
Pichu.prototype.constructor = Pichu;

Pikachu.prototype = Object.create(Pokemon.prototype);
Pikachu.prototype.constructor = Pikachu;

Raichu.prototype = Object.create(Pokemon.prototype);
Raichu.prototype.constructor = Raichu;

const pichu = new Pichu();
console.log(pichu.getPokemonType());

const pikachu = pichu.evolve();
console.log(pikachu.getPokemonType());
console.log(pikachu.constructor === Pikachu);

const raichu = pikachu.evolve();
console.log(raichu.getPokemonType());
console.log(raichu.constructor === Raichu);

const raichu2 = raichu.evolve();
console.log(raichu2 === raichu);

function Meowt() {
    Pokemon.call(this);
    this.name = 'Meowt';
    this.specie = 'Scratch Cat Pokémon';
    this.type = 'Dark';
    this.evolve = () => new Persian();
}

function Persian() {
    Pokemon.call(this);
    this.name = 'Meowt';
    this.specie = 'Scratch Cat Pokémon';
    this.type = 'Dark';
    this.evolve = () => this;
}
Meowt.prototype = Object.create(Pokemon.prototype);
Meowt.prototype.constructor = Meowt;

Persian.prototype = Object.create(Pokemon.prototype);
Persian.prototype.constructor = Persian;

const meowt = new Meowt();
console.log(meowt.getPokemonType());
console.log(meowt.getSpecie());

const persian = meowt.evolve();
console.log(persian.getPokemonType());
console.log(persian.constructor === Persian);

console.log(meowt.getType());
console.log(meowt.getType() === persian.getType());

console.log(meowt.canFly() === persian.canFly());