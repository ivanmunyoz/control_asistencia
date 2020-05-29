import { Router } from 'express';
import { asistenciaController } from "../controllers/asistenciaController";


class AsistenciasRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', asistenciaController.list);
        this.router.get('/:id_asis', asistenciaController.getOne);
        this.router.post('/', asistenciaController.create);
        this.router.delete('/:id_asis', asistenciaController.delete);
        this.router.put('/:id_asis', asistenciaController.update);
        this.router.get('/usuario/:id_usr', asistenciaController.asistByUser);
        this.router.get('/clase/:id_clas', asistenciaController.asistByClass);
    }

}

const asistenciasRoutes = new AsistenciasRoutes();
export default asistenciasRoutes.router;