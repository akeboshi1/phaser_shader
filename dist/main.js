"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BagMediator_1 = require("./ui/Bag/BagMediator");
class Template {
    constructor() {
    }
    init(worldService) {
        this.world = worldService;
        const bagMediator = new BagMediator_1.BagMediator(worldService);
    }
    preupdate() {
    }
    update() {
    }
    postupdate() {
    }
}
exports.Template = Template;
