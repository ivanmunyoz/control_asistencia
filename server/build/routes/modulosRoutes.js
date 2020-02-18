"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const moduloController_1 = require("../controllers/moduloController");
class ModulosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/ciclos/:id/modulos', moduloController_1.moduloController.list);
        this.router.get('/ciclos/:id/modulos/:id_mod', moduloController_1.moduloController.getOne);
        this.router.post('/ciclos/:id/modulos', moduloController_1.moduloController.create);
        this.router.delete('/ciclos/:id/modulos/:id_mod', moduloController_1.moduloController.delete);
        this.router.put('/ciclos/:id/modulos/:id_mod', moduloController_1.moduloController.update);
    }
}
const modulosRoutes = new ModulosRoutes();
exports.default = modulosRoutes.router;
