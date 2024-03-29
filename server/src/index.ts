import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';

import indexRoutes from './routes/indexRoutes';
import ciclosRoutes from './routes/ciclosRoutes';
import modulosRoutes from './routes/modulosRoutes';
import calendariosRoutes from './routes/calendariosRoutes';
import usuariosRoutes from './routes/usuariosRoutes';
import clasesRoutes from './routes/clasesRoutes';
import gruposRoutes from './routes/gruposRoutes';
import asistenciasRoutes from './routes/asistenciasRoutes';

class Server{

    public app: Application;

    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void{
        this.app.set('port',process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }

    routes(): void{
        this.app.use('/',indexRoutes);
        this.app.use('/ciclos',ciclosRoutes);
        this.app.use('/calendarios',calendariosRoutes);
        this.app.use('/',modulosRoutes);
        this.app.use('/usuarios',usuariosRoutes);
        this.app.use('/clases',clasesRoutes);
        this.app.use('/grupos',gruposRoutes);
        this.app.use('/asistencias', asistenciasRoutes);
    }

    start(): void{
        this.app.listen(this.app.get('port'), () => {
            console.log("Servidor en el puerto", this.app.get('port'))
        });
    }
}

const server = new Server();
server.start();