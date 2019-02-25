class playState extends Phaser.Scene {
    constructor() {
        super({key:"play"});
    }

    create() {

        console.log(2);
        this.player = this.physics.add.sprite(200,450,'player');

        this.anims.create({
            key: 'turn',
            frames: [{key:'player', frame:2}],
            frameRate: 20,
        });
        console.log(4);
    }

    update() {
        console.log(8);
        this.player.anims.play('turn');
    }
}