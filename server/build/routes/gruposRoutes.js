"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const grupoController_1 = require("../controllers/grupoController");
class GruposRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', grupoController_1.grupoController.list);
        this.router.get('/:id_grp', grupoController_1.grupoController.getOne);
        this.router.post('/', grupoController_1.grupoController.create);
        this.router.delete('/:id_grp', grupoController_1.grupoController.delete);
        this.router.put('/:id_grp', grupoController_1.grupoController.update);
        this.router.get('/usuario/:id_usr', grupoController_1.grupoController.getGroupUser);
        this.router.get('/clase/:id_clas', grupoController_1.grupoController.getGroupClass);
    }
}
const gruposRoutes = new GruposRoutes();
exports.default = gruposRoutes.router;
