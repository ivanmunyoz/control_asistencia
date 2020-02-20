"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const calendarioController_1 = require("../controllers/calendarioController");
class CalendarioRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', calendarioController_1.calendarioController.list);
        this.router.get('/:id_cal', calendarioController_1.calendarioController.getOne);
        this.router.post('/', calendarioController_1.calendarioController.create);
        this.router.delete('/:id_cal', calendarioController_1.calendarioController.delete);
        this.router.put('/:id_cal', calendarioController_1.calendarioController.update);
    }
}
const calendarioRoutes = new CalendarioRoutes();
exports.default = calendarioRoutes.router;
