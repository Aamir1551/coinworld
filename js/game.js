var config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
}
var game = new Phaser.Game(config);

// Adding all states
game.scene.add('boot', bootState);
game.scene.add('load', loadState);
game.scene.add('menu', menuState);
game.scene.add('play', playState);
game.scene.add('win', winState);
//All states have been added

//calling boot state
game.scene.start('boot');
