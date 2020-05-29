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
class GrupoController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const grupos = yield database_1.default.query("SELECT * FROM grupos");
            res.json(grupos);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id_grp = req.params.id_grp;
            const grupos = yield database_1.default.query('SELECT * FROM grupos WHERE id_grupo= ?', [id_grp]);
            if (grupos.length > 0) {
                return res.json(grupos[0]);
            }
            res.status(404).json({ text: 'No se ha encontrado el grupo solicitado' });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO grupos set ?', req.body);
            res.json({ message: 'grupo creado' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id_grp = req.params.id_grp;
            yield database_1.default.query('UPDATE grupos set ? WHERE id_grupo= ?', [req.body, id_grp]);
            res.json({ message: 'grupo actualizado' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id_grp = req.params.id_grp;
            yield database_1.default.query('DELETE FROM grupos WHERE id_grupo=?', [id_grp]);
            res.json({ message: 'Se ha borrado el grupo' });
        });
    }
    getGroupUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id_usr = req.params.id_usr;
            const grupos = yield database_1.default.query('SELECT * FROM grupos WHERE id_usuario=?', [id_usr]);
            if (grupos.length > 0) {
                return res.json(grupos);
            }
            res.status(404).json({ text: 'No se ha encontrado el grupo solicitado' });
        });
    }
    getGroupClass(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id_clas = req.params.id_clas;
            const grupos = yield database_1.default.query('SELECT * FROM grupos WHERE id_clase=?', [id_clas]);
            if (grupos.length > 0) {
                return res.json(grupos);
            }
            res.status(404).json({ text: 'No se ha encontrado el grupo solicitado' });
        });
    }
}
exports.grupoController = new GrupoController();
