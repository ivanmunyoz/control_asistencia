import { Router } from 'express';
import { cicloController } from "../controllers/cicloController";


class CiclosRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', cicloController.list);
        this.router.get('/:id', cicloController.getOne);
        this.router.post('/', cicloController.create);
        this.router.delete('/:id', cicloController.delete);
        this.router.delete('/:id', cicloController.delete);
        this.router.put('/:id', cicloController.update);
    }

}

const ciclosRoutes = new CiclosRoutes();
export default ciclosRoutes.router;