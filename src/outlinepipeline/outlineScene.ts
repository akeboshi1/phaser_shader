import { OutlinePipeline } from "./outlinepipeline";

export class OutlineScene extends Phaser.Scene {
    constructor(config) {
        super(config);
    }

    preload() {
        this.load.image('face', '../res/wood.png');
    }

    create() {
        var image: Phaser.GameObjects.Image = this.add.image(400, 300, 'face');
        let pipeline: any = (<Phaser.Renderer.WebGL.WebGLRenderer>this.renderer).pipelines.get(OutlinePipeline.KEY);
        if (!pipeline) {
            (<Phaser.Renderer.WebGL.WebGLRenderer>this.renderer).pipelines.addPostPipeline(OutlinePipeline.KEY, OutlinePipeline);
            pipeline = OutlinePipeline;
        }


        image.setPostPipeline(<OutlinePipeline>pipeline);
        const _pipeline: any = image.postPipelines[image.postPipelines.length - 1];
        _pipeline.quality = 1;
        _pipeline.thickness = 2;
        _pipeline.color = 0xff8a50;

        image.setPostPipeline(<OutlinePipeline>pipeline);
        const _pipeline1: any = image.postPipelines[image.postPipelines.length - 1];
        _pipeline1.quality = 1;
        _pipeline1.thickness = 2;
        _pipeline1.color = 0xc41c00;
        this.input.on('pointerdown', function (pointer) {
            image.resetPipeline();
        });

    }
}
