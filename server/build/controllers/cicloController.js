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
class CicloController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const ciclos = yield database_1.default.query("SELECT * FROM ciclos");
            res.json(ciclos);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const ciclos = yield database_1.default.query('SELECT * FROM ciclos WHERE id_ciclo= ?', [id]);
            console.log(ciclos);
            if (ciclos.length > 0) {
                return res.json(ciclos[0]);
            }
            res.status(404).json({ text: 'No se ha encontrado el ciclo solicitado' });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO ciclos set ?', req.body);
            res.json({ message: 'Ciclo creado' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            yield database_1.default.query('UPDATE ciclos set ? WHERE id_ciclo= ?', [req.body, id]);
            res.json({ message: 'Ciclo actualizado' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            yield database_1.default.query('DELETE FROM ciclos WHERE id_ciclo= ?', [id]);
            res.json({ message: 'Se ha borrado el ciclo' });
        });
    }
}
exports.cicloController = new CicloController();
