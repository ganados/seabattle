// game object
const game = new Phaser.Game(854, 480, Phaser.EXACT_FIT, 'game-container');

// plugins
Phaser.Device.whenReady(function () {
    game.plugins.add(PhaserInput.Plugin);
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
});

// all states
game.state.add('preloadState', preloadState);
game.state.add('gameState', gameState);
game.state.add('gameOverState', gameOverState);
game.state.add('menuState', menuState);

// play
game.state.start('preloadState');
