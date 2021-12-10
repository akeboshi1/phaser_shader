import { Graypipeline } from './graypipeline';

export class GrayScene extends Phaser.Scene {
    constructor(config) {
        super(config);
    }

    preload() {
        this.load.image('face', '../res/wood.png');
    }

    create() {
        var image: Phaser.GameObjects.Image = this.add.image(400, 300, 'face');
        const pipeline = new Graypipeline(this.game);
        (<Phaser.Renderer.WebGL.WebGLRenderer>this.renderer).pipelines.add(Graypipeline.KEY, pipeline);
        image.setPipeline(pipeline);
        this.input.on('pointerdown', function (pointer) {
            image.resetPipeline();
        });

    }
}