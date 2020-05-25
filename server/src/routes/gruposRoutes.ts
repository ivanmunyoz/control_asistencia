import { Router } from 'express';
import { grupoController } from "../controllers/grupoController";


class GruposRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', grupoController.list);
        this.router.get('/:id_grp', grupoController.getOne);
        this.router.post('/', grupoController.create);
        this.router.delete('/:id_grp', grupoController.delete);
        this.router.put('/:id_grp', grupoController.update);
    }

}

const gruposRoutes = new GruposRoutes();
export default gruposRoutes.router;