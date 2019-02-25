class loadState extends Phaser.Scene {
    constructor() {
        super({key:"load"})
    }

    preload() {
        let loadingLabel = this.add.text(80, 150, 'loading...', {font:'30px Courier', fill:'#ffffff'});
        
        //loading all assets
        this.load.spritesheet('player', '../assets/Sunny-land-files/PNG/spritesheets/player-run.png',{frameWidth:500,frameHeight:500});


    }

    create() {
        //call the menu state
        this.scene.start('menu');
    }

}