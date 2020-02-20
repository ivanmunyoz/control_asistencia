import { Router } from 'express';
import { usuarioController } from "../controllers/usuarioController";


class UsuariosRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', usuarioController.list);
        this.router.get('/:id', usuarioController.getOne);
        this.router.post('/', usuarioController.create);
        this.router.delete('/:id', usuarioController.delete);
        this.router.put('/:id', usuarioController.update);
    }

}

const usuariosRoutes = new UsuariosRoutes();
export default usuariosRoutes.router;