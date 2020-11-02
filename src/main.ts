import "Phaser";
import { OutlinePipeline } from "./outlinepipeline";
var config = {
  type: Phaser.AUTO,
  parent: 'phaser-example',
  width: 800,
  height: 600,
  scene: {
    preload: preload,
    create: create
  }
};

var game = new Phaser.Game(config);

function preload() {
  this.load.image('face', '../res/wood.png');
}

function create() {
  var image: Phaser.GameObjects.Image = this.add.image(400, 300, 'face');
  const pipeline = new OutlinePipeline(this.game);
  pipeline.setFloat1("gray", 1.0);
  this.game.renderer.addPipeline(OutlinePipeline.KEY, pipeline);
  image.setPipeline(OutlinePipeline.KEY);
  this.input.on('pointerdown', function (pointer) {
    image.resetPipeline();
  });

}
