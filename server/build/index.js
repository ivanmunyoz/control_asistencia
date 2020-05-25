"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const ciclosRoutes_1 = __importDefault(require("./routes/ciclosRoutes"));
const modulosRoutes_1 = __importDefault(require("./routes/modulosRoutes"));
const calendariosRoutes_1 = __importDefault(require("./routes/calendariosRoutes"));
const usuariosRoutes_1 = __importDefault(require("./routes/usuariosRoutes"));
const clasesRoutes_1 = __importDefault(require("./routes/clasesRoutes"));
const gruposRoutes_1 = __importDefault(require("./routes/gruposRoutes"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use('/', indexRoutes_1.default);
        this.app.use('/ciclos', ciclosRoutes_1.default);
        this.app.use('/calendarios', calendariosRoutes_1.default);
        this.app.use('/', modulosRoutes_1.default);
        this.app.use('/usuarios', usuariosRoutes_1.default);
        this.app.use('/clases', clasesRoutes_1.default);
        this.app.use('/grupos', gruposRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log("Servidor en el puerto", this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
