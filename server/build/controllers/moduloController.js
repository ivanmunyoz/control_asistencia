"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class ModuloController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const modulos = yield database_1.default.query("SELECT * FROM modulos WHERE id_ciclo=?", [id]);
            res.json(modulos);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id_mod = req.params.id_mod;
            const id_cic = req.params.id;
            const modulos = yield database_1.default.query('SELECT * FROM modulos WHERE id_modulo= ? AND id_ciclo= ?', [id_mod, id_cic]);
            if (modulos.length > 0) {
                return res.json(modulos[0]);
            }
            res.status(404).json({ text: 'No se ha encontrado el modulo solicitado' });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id_cic = req.body.id_ciclo;
            const mod_nom = req.body.nombre;
            const mod_desc = req.body.descripcion;
            const mod_hora = req.body.horas_totales;
            const consulta = yield database_1.default.query("SELECT id_ciclo FROM ciclos WHERE id_ciclo= ?", id_cic);
            if (consulta.length != 0) {
                yield database_1.default.query('INSERT INTO modulos set id_ciclo=(SELECT id_ciclo FROM ciclos WHERE id_ciclo= ?), nombre= ?, descripcion= ?, horas_totales= ? ', [id_cic, mod_nom, mod_desc, mod_hora]);
                res.json({ message: 'Módulo creado' });
            }
            else {
                res.json({ message: 'No se ha podido crear el módulo' });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id_mod = req.params.id_mod;
            const id_cic = req.body.id_ciclo;
            const mod_nom = req.body.nombre;
            const mod_desc = req.body.descripcion;
            const mod_hora = req.body.horas_totales;
            const consulta_cic = yield database_1.default.query("SELECT id_ciclo FROM ciclos WHERE id_ciclo= ?", id_cic);
            const consulta_mod = yield database_1.default.query("SELECT id_modulo FROM modulos WHERE id_modulo= ?", id_mod);
            if (consulta_cic.length != 0 && consulta_mod.length != 0) {
                yield database_1.default.query('UPDATE modulos set id_ciclo=(SELECT id_ciclo FROM ciclos WHERE id_ciclo= ?), nombre= ?, descripcion= ?, horas_totales= ? WHERE id_modulo= ?', [id_cic, mod_nom, mod_desc, mod_hora, id_mod]);
                res.json({ message: 'Módulo actualizado' });
            }
            else {
                res.json({ message: 'No se ha podido actualizar el módulo' });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id_mod = req.params.id_mod;
            yield database_1.default.query('DELETE FROM modulos WHERE id_modulo= ?', [id_mod]);
            res.json({ message: 'Se ha borrado el modulo' });
        });
    }
}
exports.moduloController = new ModuloController();
