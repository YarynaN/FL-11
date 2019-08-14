class Ingredient{
    constructor(name, cals){
        this._name = name;
        this._calories = cals;
    }

    get calories() {
        return this._calories;
    }

    set calories(value) {
        this._calories = value;
    }
    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }
}

class Bun extends Ingredient{
    constructor(cals){
        super('Bun', cals);
    }
}

class SecretIngredient extends Ingredient{
    constructor(cals = 100){
        super('Secret Ingredient', cals);
    }
}

class Tomato extends Ingredient{
    constructor(cals = 20){
        super('Juicy Tomato', cals);
    }
}

class Cheese extends Ingredient{
    constructor(cals = 120){
        super('Super Cheese', cals);
    }
}

class Patty extends Ingredient{
    constructor(cals = 300){
        super('Patty', cals);
    }
}


class Hamburger{
    constructor(type, calories, addSceretIngr = false){
        this._type = type;
        this._ingredients = [];
        this._bunRoll = new Bun(calories);
        this._bittenCount = 0;

        this.addIngredient(this._bunRoll);

        if(addSceretIngr){
            this.addSecretIngredient();
        }
    }

    addIngredient(ingredient) {
        if(this._bittenCount){
            console.log(`Sorry you cannot add ${ingredient.name}`);
            return;
        }
        this._ingredients.push(ingredient);
    }

    getCountOf(type) {
        return this._ingredients.filter((ingredient) => ingredient instanceof type).length;
    }

    addTomato() {
        if(this.getCountOf(Tomato) === 2){
            console.log('Sorry, you can add tomato only twice');
            return;
        }
        this.addIngredient(new Tomato());
    }

    addCheese() {
        if(this.getCountOf(Cheese) === 1){
            console.log('Sorry, you can add Super Cheese only once');
            return;
        }
        this.addIngredient(new Cheese());
    }

    addSecretIngredient() {
        if(this.getCountOf(SecretIngredient) === 1){
            console.log('Sorry, you can add Secret Ingredient only once');
            return;
        }

        if(this._ingredients.length > 1){
            console.log('Sorry, you can add Secret Ingredient only before another ingredient');
            return
        }

        this.addIngredient(new SecretIngredient());
    }

    bite() {
        this._bittenCount++ ;
    }

    info() {
        const ingredientsCounts = this._ingredients.reduce((counts, ingredient) => {
            counts[ingredient.name] = counts[ingredient.name] || 0;
            counts[ingredient.name]++;
            return counts;
        }, {});
        const countsMessages = Object.keys(ingredientsCounts).map((key) => `with ${ingredientsCounts[key]} ${key}`);
        return `${this._type} burger: ${countsMessages.join(', ')}, is bit ${this._bittenCount} times. Total calories ${this.calories}`
    }

    get calories () {
        return this._ingredients.reduce((sum, ingredient) => sum + ingredient.calories, 0);
    }

    set calories (cals) {
        this._bunRoll.calories = cals;
    }

}

const burger = new Hamburger('nom', 350, true);
burger.addSecretIngredient();
burger.addTomato();
burger.addTomato();
burger.addCheese();
burger.bite();
burger.bite();
burger.bite();

burger.addTomato();

console.log(burger.info());

