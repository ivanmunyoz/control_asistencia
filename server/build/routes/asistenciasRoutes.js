"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const asistenciaController_1 = require("../controllers/asistenciaController");
class AsistenciasRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', asistenciaController_1.asistenciaController.list);
        this.router.get('/:id_asis', asistenciaController_1.asistenciaController.getOne);
        this.router.post('/', asistenciaController_1.asistenciaController.create);
        this.router.delete('/:id_asis', asistenciaController_1.asistenciaController.delete);
        this.router.put('/:id_asis', asistenciaController_1.asistenciaController.update);
        this.router.get('/usuario/:id_usr', asistenciaController_1.asistenciaController.asistByUser);
        this.router.get('/clase/:id_clas', asistenciaController_1.asistenciaController.asistByClass);
    }
}
const asistenciasRoutes = new AsistenciasRoutes();
exports.default = asistenciasRoutes.router;
