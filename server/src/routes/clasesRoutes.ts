import { Router } from 'express';
import { claseController } from "../controllers/claseController";


class ClasesRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', claseController.list);
        this.router.get('/:id_clas', claseController.getOne);
        this.router.post('/', claseController.create);
        this.router.delete('/:id_clas', claseController.delete);
        this.router.put('/:id_clas', claseController.update);
    }

}

const clasesRoutes = new ClasesRoutes();
export default clasesRoutes.router;