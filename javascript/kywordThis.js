/*//////////////////////////////////////////////////////////////
                           'THIS' IN METHODS

Use the keyword this to access other properties on the same object                          
//////////////////////////////////////////////////////////////*/

const person = {
  first : 'Darryl',
  last : 'Rachel',
  fullName() {
    return `${this.first} ${this.last}`
  }
}

person.fullName(); // Darryl Rachel
person.last = 'Plant';
person.fullName(); // Darryl Plant

const skateboard = {
  deck : 'Hookups',
  trucks : 'Independents',
  wheels : 'Ricta',
  griptape : 'Jessup',
  setup() {
    return `I ride ${this.deck} skateboards, ${this.trucks} trucks, and ${this.wheels} wheels`;
  }
}


/*////////////////////////////////////////////////////////////
Define an object called `hen`. It should have three properties

1. name - should be set to 'Helen'
2. eggCount - should be set to 0
3. layAnEgg - should be a method which increments the value of eggCount by 1
and returns the string 'EGG'.

////////////////////////////////////////////////////////////*/

const hen = {
  name : 'Helen',
  eggCount : 0,
  layAnEgg() {
      this.eggCount++;
      return `EGG`;
  }
};