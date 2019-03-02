class bootState extends Phaser.Scene {
    constructor() {
        super({key:"boot"});
    }
    create() {

        this.cursors = this.input.keyboard.createCursorKeys();
        //calling state load
        console.log("y");
        this.scene.start('load');
    }
}