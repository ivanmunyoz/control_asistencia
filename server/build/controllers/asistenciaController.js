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
class AsistenciaController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const asistencias = yield database_1.default.query("SELECT * FROM asistencia");
            res.json(asistencias);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id_asis = req.params.id_asis;
            const asistencias = yield database_1.default.query('SELECT * FROM asistencia WHERE id_asistencia= ?', [id_asis]);
            if (asistencias.length > 0) {
                return res.json(asistencias[0]);
            }
            res.status(404).json({ text: 'No se ha encontrado la asistencia solicitada' });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO asistencia set ?', req.body);
            res.json({ message: 'Asistencia creada' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id_asis = req.params.id_asis;
            yield database_1.default.query('UPDATE asistencia set ? WHERE id_asis= ?', [req.body, id_asis]);
            res.json({ message: 'Asistencia actualizada' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id_asis = req.params.id_asis;
            yield database_1.default.query('DELETE FROM asistencia WHERE id_asistencia= ?', [id_asis]);
            res.json({ message: 'Se ha borrado la asistencia' });
        });
    }
    asistByUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id_usr = req.params.id_usr;
            const asistencias = yield database_1.default.query('SELECT * FROM asistencia WHERE id_alumno=?', [id_usr]);
            if (asistencias.length > 0) {
                return res.json(asistencias);
            }
            res.status(404).json({ text: 'No se han encontrado la asistencia solicitada' });
        });
    }
    asistByClass(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id_clas = req.params.id_clas;
            const asistencias = yield database_1.default.query('SELECT * FROM asistencia WHERE id_clase=?', [id_clas]);
            if (asistencias.length > 0) {
                return res.json(asistencias);
            }
            res.status(404).json({ text: 'No se han encontrado la asistencia solicitada' });
        });
    }
}
exports.asistenciaController = new AsistenciaController();
