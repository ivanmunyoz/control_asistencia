import { Router } from 'express';
import { calendarioController } from "../controllers/calendarioController";


class CalendarioRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', calendarioController.list);
        this.router.get('/:id_cal', calendarioController.getOne);
        this.router.post('/', calendarioController.create);
        this.router.delete('/:id_cal', calendarioController.delete);
        this.router.put('/:id_cal', calendarioController.update);
    }

}

const calendarioRoutes = new CalendarioRoutes();
export default calendarioRoutes.router;