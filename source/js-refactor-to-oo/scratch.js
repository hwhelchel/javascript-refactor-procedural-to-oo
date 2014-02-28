// name spacing App so we only have one global.
var DiceApp = {};

//Screen Boss
DiceApp.View = function(config){
  this.config = config;
};

DiceApp.View.prototype = {
  update: function(dataSource){
    this.showDice(dataSource);
    if (dataSource.dice) {
      for (var die in dataSource.dice) {
        this.showRoll(die);
      }
      this.printOut(dataSource);
    }
  },
  printOut: function(dataSource){
    console.log(this.config.messageToLog);
  },
  showDice: function(dataSource){
    $(this.config.diceBucket).append(this.config.die);
  },
  showRoll: function(die){
    $(this.config.dieDisplay).text(die.value);
  }
};

//Model

DiceApp.Die = function(sides){
  this.value = 0;
  this.sides = sides;
};

DiceApp.Die.prototype = {
  roll: function(){
    this.value = Math.floor((Math.random()*this.sides)+1);
  }
};

//Binder
DiceApp.Binder = function(targets, controller){
  this.targets = targets;
  this.controller = controller;
};

DiceApp.Binder.prototype = {
  bind: function(){
    this.bindDiceMaker();
    this.bindRollMaker();
  },
  bindDiceMaker: function(){
    var controller = this.controller,
    sel = this.targets.diceStarter;

    $(sel).click(function(){
      controller.diceControl();
    });
  },
  bindRollMaker: function(){
    var controller = this.controller,
    sel = this.targets.rollStarter;

    $(sel).click(function(){
      controller.rollControl();
    });
  }
};


//CEO
DiceApp.Controller = function(config){
  this.view = config.view;
  this.dice = [];
};

DiceApp.Controller.prototype = {
  diceControl: function(){
    this.makeDie();
    this.view.update(this);
  },
  rollControl: function(){
    this.makeRolls();
    this.view.update(this);
  },
  makeDie: function(){
    console.log(this.dice);
    this.dice.push(new DiceApp.Die(6));
  },
  makeRolls: function(){
    for (var die in this.dice)
    {
      die.roll();
    }
  }
};

$(function(){

  var eventStarters = {
    diceStarter: '#roller button.add',
    rollStarter: '#roller button.roll'
  };

  DiceApp.view = new DiceApp.View({
      diceBucket: '.dice',
      dieDisplay:  '.die',
      die: '<div class="die">0</div>',
      messageToLog: 'WAT',
      eventStarters: eventStarters
  });

  DiceApp.controller = new DiceApp.Controller({ view: DiceApp.view });
  new DiceApp.Binder(eventStarters, DiceApp.controller).bind();
});
