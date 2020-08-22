const Pet = require('../src/pet');

describe('constructor', () => {
    it('returns an object', () => {
      expect(new Pet('Gavin')).toBeInstanceOf(Object);
    });
  });

  describe('constructor', () => {
  
    it('sets the name property', () => {
      const myPet = new Pet('Gavin');
  
      expect(myPet.name).toEqual('Gavin');
    });
  });

  describe('constructor', () => {
  
    it('has a initial age of 0', () => {
      const myPet = new Pet('Gavin');
  
      expect(myPet.age).toEqual(0);
    });
  });

  describe('growUp', () => {

    it('increases age by 1 year at a time', () => {
      const myPet = new Pet('Gavin');

      myPet.growUp();

      expect(myPet.age).toBe(1);

    });
  });

  describe('constructor', () => {

    it('has initial hunger of 0', () => {
      const myPet = new Pet('Gavin');

      expect(myPet.hunger).toBe(0);
    });
  });

  describe('growUp', () => {

    it('increases hunger by 5 each time', () => {
      const myPet = new Pet('Gavin');

      myPet.growUp();

      expect(myPet.hunger).toBe(5);

    });
  });

  describe('constructor', () => {

    it('has initial fitness of 0', () => {
      const myPet = new Pet('Gavin');

      expect(myPet.fitness).toBe(10);
    });
  });

  describe('growUp', () => {

    it('reduces fitness by 3 each time', () => {
      const myPet = new Pet('Gavin')

      myPet.growUp();

      expect(myPet.fitness).toBe(7);

    });
  });

  describe('walk', () => {

    it('increases fitness level by 4 each time', () => {
      const myPet = new Pet ('Gavin')

      myPet.fitness = 4;
      myPet.walk();

      expect(myPet.fitness).toBe(8);
    });
  });

  describe('walk', () => {
  
    it('increases fitness by to a maximum of 10', () => {
      const myPet = new Pet('fido');
  
      myPet.fitness = 8;
      myPet.walk();
  
      expect(myPet.fitness).toEqual(10);
    });
  });

  describe('feed', () => {

    it('decreases pet hunger by 3', () => {
      const myPet = new Pet ('Gavin');

      myPet.hunger = 3;
      myPet.feed();

      expect(myPet.hunger).toEqual(0);
    });
  });

  describe('feed', () => {

    it('hunger doesnt decrease past 0', () => {
      const myPet = new Pet ('Gavin');

      myPet.hunger = 2;
      myPet.feed();

      expect(myPet.hunger).toEqual(0);
    });
  });