import { BagMediator } from "./ui/Bag/BagMediator";
import { WorldService, IRoomService, BasicPlugin } from "game-core";


class Template {
  private room: IRoomService;
  constructor() {
  }

  init(worldService: WorldService) {
    // this.mWorld = worldService;
    const bagMediator = new BagMediator(worldService);
    const plugins = new BasicPlugin();
    plugins.init(worldService);
    // const plugin = new RoomManager(worldService);
    // plugin.init(worldService);

    const uiLayer = worldService.uiManager.getUILayerManager();
    const scene = uiLayer.scene;
    scene.add.graphics().fillStyle(0xFF9900, 0.6).fillRect(0, 0, scene.cameras.main.width, scene.cameras.main.height);
    
  }
}
export { Template };