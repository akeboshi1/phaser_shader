import { BagMediator } from "./ui/Bag/BagMediator";
import { WorldService, IRoomService } from "game-core";
import { FramesDisplay } from "game-core/rooms/display/frames.display";

class Template {
  private world: WorldService;
  private room: IRoomService;
  constructor() {
  }

  init(worldService) {
    this.world = worldService;
    const bagMediator = new BagMediator(worldService);
  }

  preupdate() {

  }

  update() {

  }

  postupdate() {
  }
}

export { Template }