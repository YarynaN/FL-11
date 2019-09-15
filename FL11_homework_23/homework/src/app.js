/* eslint max-classes-per-file: "off" */
/* eslint no-console: "off" */

class Cart {
}

class SimpleCart extends Cart {
  constructor(name) {
    super();
    this._name = name;
    this._cartItems = [];
  }

  get name() {
    return this._name;
  }

  addItem(price) {
    this._cartItems.push(price);
  }

  get orderTotalPrice() {
    return this._cartItems.reduce((sum, currentVal) => sum + currentVal);
  }

  makeOrder() {
    return `Total price ${this.outputPrice(this.orderTotalPrice)}, visit us on weekends and hot hours to get your discount`;
  }

  outputPrice(price) {
    return `equals to ${price}, ${this.name}`;
  }
}

class BonusDecorator extends Cart {
  constructor(cart) {
    super();
    this._cart = cart;
  }

  get name() {
    return this._cart.name;
  }

  addItem(price) {
    this._cart.addItem(price);
  }

  get orderTotalPrice() {
    const totalOrder = this._cart.orderTotalPrice;
    const bonus = Math.floor(totalOrder / 100) * 5;
    return totalOrder - bonus;
  }

  makeOrder() {
    return `Total price ${this.outputPrice(this.orderTotalPrice)}, visit us on weekends and hot hours to get your `
    + `discount to compliment your bonus.`;
  }

  outputPrice(price) {
    return `minus bonus ${this._cart.outputPrice(price)}`;
  }
}

class DiscountDecorator extends Cart {
  constructor(cart, nightDiscount, weekendDiscount) {
    super();
    this._cart = cart;
    this._nightDiscount = nightDiscount;
    this._weekendDiscount = weekendDiscount;
  }

  get name() {
    return this._cart.name;
  }

  addItem(price) {
    this._cart.addItem(price);
  }

  get orderTotalPrice() {
    const totalOrder = this._cart.orderTotalPrice;
    let discount = 0;
    const date = new Date();
    const dayOfWeek = date.getDay();
    const hour = date.getHours();
    if (dayOfWeek === 0 || dayOfWeek === 6) {
      discount = this._weekendDiscount;
    }
    if (hour >= 23 && hour < 6) {
      discount += this._nightDiscount;
    }
    return totalOrder - discount;
  }

  makeOrder() {
    return `Total price ${this.outputPrice(this.orderTotalPrice)}`;
  }

  outputPrice(price) {
    return `minus discount ${this._cart.outputPrice(price)}`;
  }
}

let cart = new SimpleCart('Yaryna');
cart.addItem(110);
cart.addItem(240);
console.log(cart.makeOrder());

cart = new BonusDecorator(cart);
console.log(cart.makeOrder());

cart = new DiscountDecorator(cart, 10, 20);
console.log(cart.makeOrder());
