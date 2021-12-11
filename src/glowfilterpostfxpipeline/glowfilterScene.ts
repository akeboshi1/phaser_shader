import { GlowFilterPostFxPipeline } from "./glowfilterpostfxpipeline";

export class GlowFilterScene extends Phaser.Scene {
    private _pipeline;
    private _intensity = 0.02;
    constructor(config) {
        super(config);
    }

    preload() {
        this.load.image('face', '../res/wood.png');
    }

    create() {
        var image0 = this.add.image(300, 300, 'face');
        var image = this.add.image(400, 300, 'face');
        let pipeline: any = (<Phaser.Renderer.WebGL.WebGLRenderer>this.renderer).pipelines.get(GlowFilterPostFxPipeline.KEY);
        if (!pipeline) {
            (<Phaser.Renderer.WebGL.WebGLRenderer>this.renderer).pipelines.addPostPipeline(GlowFilterPostFxPipeline.KEY, GlowFilterPostFxPipeline);
            pipeline = GlowFilterPostFxPipeline;
        }

        image.setPostPipeline(<GlowFilterPostFxPipeline>pipeline);
        this._pipeline = image.postPipelines[image.postPipelines.length - 1];
        this._pipeline.intensity = 0.01;

        this.input.on('pointerdown', function (pointer) {
            image.resetPipeline();
        });

    }
}