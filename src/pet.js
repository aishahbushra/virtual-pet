const MAXIMUM_FITNESS = 10;
const MINIMUM_HUNGER = 0;

function Pet(name) {
  this.name = name,
  this.age = 0
  this.hunger = 0
  this.fitness = MAXIMUM_FITNESS
}
Pet.prototype.growUp = function() {
    this.age += 1;
    this.hunger = this.age * 5;
    this.fitness = MAXIMUM_FITNESS - (3 * this.age);
}
Pet.prototype.walk = function() {
  if ((this.fitness + 4) <= MAXIMUM_FITNESS) {
    this.fitness += 4;
  } else {
    this.fitness = MAXIMUM_FITNESS;
  }
}
Pet.prototype.feed = function() {
  if ((this.hunger - 3) >= 3) {
    this.hunger = (this.age * 5) - 3;
  } else {
    this.hunger = MINIMUM_HUNGER;
  }
}
//

{ const myPet = new Pet('Gavin')
    this.name = 'Gavin'
}
    

module.exports = Pet;