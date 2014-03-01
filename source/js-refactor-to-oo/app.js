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
  DiceApp.binder = new DiceApp.Binder(eventStarters, DiceApp.controller);
  DiceApp.binder.bind();
});
