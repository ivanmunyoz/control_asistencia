"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cicloController_1 = require("../controllers/cicloController");
class CiclosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', cicloController_1.cicloController.list);
        this.router.get('/:id', cicloController_1.cicloController.getOne);
        this.router.post('/', cicloController_1.cicloController.create);
        this.router.delete('/:id', cicloController_1.cicloController.delete);
        this.router.delete('/:id', cicloController_1.cicloController.delete);
        this.router.put('/:id', cicloController_1.cicloController.update);
    }
}
const ciclosRoutes = new CiclosRoutes();
exports.default = ciclosRoutes.router;
