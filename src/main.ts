import { BagMediator } from "./ui/Bag/BagMediator";
import { World, BasicPlugin, WorldService } from "tooqingcore";

class Template {
  constructor() {
    const plugin =  new BasicPlugin();
    console.log(plugin);
  }

  init(world: WorldService) {
    // this.mWorld = worldService;
    const bagMediator = new BagMediator();
    // console.log(sha1.sync("laksdjalsjkd"));

    // const roomManager = new RoomManager(worldService);
    // console.log(roomManager);
    // const plugins = new BasicPlugin();
    // plugins.init(worldService);
    // const plugin = new RoomManager(worldService);
    // plugin.init(worldService);

    // const world = new World();
    // console.log("====>>", world.getName());

    console.log("worldService: ", world);

    const uiLayer = world.uiManager.getUILayerManager();
    const scene = uiLayer.scene;
    scene.add.graphics().fillStyle(0xFF9900, 0.6).fillRect(0, 0, scene.cameras.main.width, scene.cameras.main.height);
    
  }
}

export function start() {
  return new Template();
}