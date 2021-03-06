const s_name = Symbol();
const s_damage = Symbol();
const s_hp = Symbol();
const s_totalHp = Symbol();
const s_agility = Symbol();
const s_win = Symbol();
const s_loss = Symbol();

class Fighter {
    constructor(fighterparams) {
        const maxFighterNum = 1024;
        const defaultFighterName = `Fighter ${Math.round(Math.random() * maxFighterNum)}`;
        const defaultDamage = 10;
        const defaultHP = 100;
        const defaultAgility = 15;
        const maxAgility = 100;
        
        this[s_name] = fighterparams.name || defaultFighterName;
        this[s_damage] = fighterparams.damage || defaultDamage;
        this[s_hp] = fighterparams.hp || defaultHP;
        this[s_agility] = fighterparams.agility > maxAgility ? maxAgility : fighterparams.agility || defaultAgility;
        this[s_win] = 0;
        this[s_loss] = 0;
        this[s_totalHp] = this[s_hp];
    }

    get name() {
        return this[s_name];
    }

    get damage() {
        return this[s_damage];
    }

    get agility() {
        return this[s_agility]
    }

    get health() {
        return this[s_hp]
    }

    attack(defenderFighter) {
        const maxPercent = 100;
        let attackProbability = (maxPercent - defenderFighter.agility) / maxPercent;
        let attack = Math.random();
        if (attack < attackProbability) {
            defenderFighter.dealDamage(this.damage);
            console.log(`${this.name} makes ${this.damage} to ${defenderFighter.name}`);
        } else {
            console.log(`${this.name} attack missed!`);
        }
    }

    logCombatHistory() {
        console.log(`Name: ${this[s_name]}, Wins: ${this[s_win]}, Losses: ${this[s_loss]}`);
    }

    heal(hp) {
        this[s_hp] += hp;
        if (this[s_hp] > this[s_totalHp]) {
            this[s_hp] = this[s_totalHp];
        }
    }

    dealDamage(hp) {
        this[s_hp] -= hp;
        if (this[s_hp] < 0) {
            this[s_hp] = 0;
        }
    }

    addWin() {
        this[s_win]++;
    }

    addLoss() {
        this[s_loss]++;
    }
}

let battle = (fighterFirst, fighterSecond) => {
    if (fighterFirst.health === 0) {
        console.log(`${fighterFirst.name} is dead and can't fight.`);
        return;
    }
    if (fighterSecond.health === 0) {
        console.log(`${fighterSecond.name} is dead and can't fight.`);
        return;
    }
    while (fighterFirst.health > 0 && fighterSecond.health > 0) {
        fighterFirst.attack(fighterSecond);
        fighterSecond.attack(fighterFirst);
    }
    if (fighterFirst.health === 0) {
        fighterFirst.addLoss();
        fighterSecond.addWin();
    } else {
        fighterFirst.addWin();
        fighterSecond.addLoss();
    }
};