class loadState extends Phaser.Scene {
    constructor() {
        super({key:"load"})
    }

    preload() {
        let loadingLabel = this.add.text(80, 150, 'loading...', {font:'30px Courier', fill:'#ffffff'});
        
        //loading all assets
        this.load.spritesheet('player-run', '../assets/Sunny-land-files/PNG/spritesheets/player-run.png',{frameWidth:33,frameHeight:32});
        this.load.spritesheet('player-idle', '../assets/Sunny-land-files/PNG/spritesheets/player-idle.png', {frameWidth:33, frameHeight: 32});
        this.load.spritesheet('player-jump', '../assets/Sunny-land-files/PNG/spritesheets/player-idle.png', {frameWidth:33, frameHeight: 32});

        this.load.image('floor', '../assets/Sunny-land-files/PNG/environment/props/small-platform.png');
        this.load.image('background', '../assets/Sunny-land-files/PNG/environment/layers/back.png');

    }

    create() {
        //call the menu state
        this.scene.start('menu');
    }

}