class Animal {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(`hello ${this.name}`)
    function hello() {
      console.log(`greet ${this.name}`)
    }
    hello();
  }
}
const cat = new Animal('cat');
function Dog(name) {
  this.name = name;
}
const dg = new Dog('Basker')
Dog.prototype.greet = function () {
  console.log("Arrgh, I'm " + this.name)
}

setTimeout(() => console.log(1), 0)
Promise.resolve('').then(() => console.log(2))

function Cat(name) {
  return {name, greet: function () {console.log(`greeting ${this.name}`)}}
}

const cat1 = {name, greet: function () {console.log(`greeting ${this.name}`)}}
