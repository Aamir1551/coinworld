class menuState extends Phaser.Scene{
    constructor() {
        super({key:"menu"});
    }

    create() {

        var nameLabel = this.add.text(80, 80, 'My First Game', {font: '50px Arial', fill:'#ffffff'})

        var startLabel = this.add.text(80, 480-80, 'press w to start', {font: '50px Arial', fill: '#ffffff'});

        this.wkey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);

        
    }

    update() {
        if(this.wkey.isDown) {
            this.start()
        }
    }

    start() {
        this.scene.start('play');
    }

};