$(document).ready(function() {
  //When button clicked...
  $('#roller button.add').on('click', function() {
    //Print to console
    console.log("WAT");
    //Add a dice to the screen
    $('.dice').append('<div class="die">0</div>');
  });

  //When button clicked...
  $('#roller button.roll').on('click', function() {
    //For each die
    $('.die').each(function(k, die) {
      // Grab a random number from 1-6
      var value = Math.floor((Math.random()*6)+1);
      // Set text in the die to that value.
      $(die).text(value);
    });
  });
});

//CEO
DiceApp.Controller = function(config){
  this.view = config.view;
};

DiceApp.Controller.prototype = {
  diceMaker: function(){
    this.makeDie();
    this.view.update(this);
  },
  rollMaker: function(){
    this.makeRolls();
    this.view.update(this);
  },
  makeDie: function(){
    this.dice.push(new Die(6));
  },
  makeRolls: function(){
    for (var die in this.dice)
    {
      die.roll();
    }
  }
};