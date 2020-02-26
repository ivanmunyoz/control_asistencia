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
class CalendarioController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const calendarios = yield database_1.default.query("SELECT * FROM calendario");
            res.json(calendarios);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id_cal;
            console.log(id);
            const calendarios = yield database_1.default.query('SELECT * FROM calendario WHERE id_calendario= ?', [id]);
            if (calendarios.length > 0) {
                return res.json(calendarios[0]);
            }
            res.status(404).json({ text: 'No se ha encontrado el calendario solicitado' });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO calendario set ?', req.body);
            res.json({ message: 'Calendario creado' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id_cal;
            yield database_1.default.query('UPDATE calendario set ? WHERE id_calendario= ?', [req.body, id]);
            res.json({ message: 'Calendario actualizado' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id_cal;
            yield database_1.default.query('DELETE FROM calendario WHERE id_calendario= ?', [id]);
            res.json({ message: 'Se ha borrado el calendario' });
        });
    }
}
exports.calendarioController = new CalendarioController();
