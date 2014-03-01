DiceApp.View = function(config){
  this.config = config;
};

DiceApp.View.prototype = {
  update: function(dataSource){
    this.showDice(dataSource.dice);
    if (dataSource.dice) {
      this.showRoll(dataSource.dice);
      this.printOut();
      }
  },
  printOut: function(dataSource){
    console.log(this.config.messageToLog);
  },
  showDice: function(dice){
    $(this.config.diceBucket).empty();
    for (var i in dice){
      $(this.config.diceBucket).append(this.config.die);
    }
  },
  showRoll: function(dice){
    $(this.config.dieDisplay).each(function(i,die){
      $(die).text(dice[i].value);
    });
  }
};
