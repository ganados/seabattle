const game = new Phaser.Game(854, 480, Phaser.CANVAS, 'sea-battle', { preload: preload, create: create, update: update });

function preload (){
  game.load.image('background-img', 'assets/sprites/bg.png');
  game.load.image('button', 'assets/sprites/button.png');
  game.load.image('button-hover', 'assets/sprites/button-hover.png');
}

function create (){
  let background = game.add.sprite(0, 0, 'background-img');
  console.log(background);
}

function update (){
  
}