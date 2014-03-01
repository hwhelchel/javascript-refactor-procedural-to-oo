var DiceApp = {};

DiceApp.Die = function(sides){
  this.value = 0;
  this.sides = sides;
};

DiceApp.Die.prototype = {
  roll: function(){
    this.value = Math.floor((Math.random()*this.sides)+1);
  }
};