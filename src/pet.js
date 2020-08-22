const MAXIMUM_FITNESS = 10;

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
//

{ const myPet = new Pet('Gavin')
    this.name = 'Gavin'
}
    

module.exports = Pet;