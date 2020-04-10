import { BagMediator } from "./ui/Bag/BagMediator";

class Template {
  private world;
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

export { Template}