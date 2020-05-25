"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const claseController_1 = require("../controllers/claseController");
class UsuariosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', claseController_1.claseController.list);
        this.router.get('/:id_clas', claseController_1.claseController.getOne);
        this.router.post('/', claseController_1.claseController.create);
        this.router.delete('/:id_clas', claseController_1.claseController.delete);
        this.router.put('/:id_clas', claseController_1.claseController.update);
    }
}
const usuariosRoutes = new UsuariosRoutes();
exports.default = usuariosRoutes.router;
