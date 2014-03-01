DiceApp.Controller = function(config){
  this.view = config.view;
};

DiceApp.Controller.prototype = {
  diceControl: function(){
    if(!this.dice){ this.makeDice(); }
    this.addDie();
    this.view.update(this);
  },
  rollControl: function(){
    for (var i in this.dice) {
      this.rollDie(this.dice[i]);
    }
    this.view.update(this);
  },
  addDie: function(){
    this.dice.push(new DiceApp.Die(6));
  },
  rollDie: function(die){
      die.roll();
    },
  makeDice: function(){
    this.dice = [];
  }
};