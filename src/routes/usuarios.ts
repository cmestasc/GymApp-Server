import { Router } from 'express';
import { usuariosController } from '../controllers/usuarios';

class UsuariosRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', usuariosController.list);
        this.router.post('/insertar', usuariosController.create);
        this.router.post('/getID', usuariosController.getID);
        this.router.post('/login', usuariosController.login);
        this.router.put('/:id', usuariosController.update);
        this.router.delete('/delete', usuariosController.delete);
    }

}

const usuariosRoutes = new UsuariosRoutes();

export default usuariosRoutes.router; 