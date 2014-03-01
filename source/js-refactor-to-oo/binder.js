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
