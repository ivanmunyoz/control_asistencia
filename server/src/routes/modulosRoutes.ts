import { Router } from 'express';
import { moduloController } from "../controllers/moduloController";


class ModulosRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/ciclos/:id/modulos', moduloController.list);
        this.router.get('/ciclos/:id/modulos/:id_mod', moduloController.getOne);
        this.router.post('/ciclos/:id/modulos', moduloController.create);
        this.router.delete('/ciclos/:id/modulos/:id_mod', moduloController.delete);
        this.router.put('/ciclos/:id/modulos/:id_mod', moduloController.update);
    }

}

const modulosRoutes = new ModulosRoutes();
export default modulosRoutes.router;