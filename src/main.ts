import "phaser3";
import { GrayScene } from "./graypipeline/grayScene";
import { OutlineScene } from "./outlinepipeline/outlineScene";
var config = {
  type: Phaser.AUTO,
  parent: 'phaser-example',
  width: 800,
  height: 600,
  backgroundColor: '#4488aa',

};

var game = new Phaser.Game(config);
// 切换不同的scene演示不同的ui组件 
game.scene.add("uiScene", GrayScene, true, { x: 0, y: 0 });

