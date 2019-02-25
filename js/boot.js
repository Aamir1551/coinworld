class bootState extends Phaser.Scene {
    constructor() {
        super({key:"boot"});
    }
    create() {

        //calling state load
        console.log("y");
        this.scene.start('load');
    }
}