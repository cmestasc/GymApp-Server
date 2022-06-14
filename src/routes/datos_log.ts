import { Router } from 'express';
import { usuariosController } from '../controllers/usuarios';

class DatosLogRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', usuariosController.list);
        this.router.post('/insertar', usuariosController.create);
        this.router.post('/login', usuariosController.login);
        this.router.put('/:id', usuariosController.update);
        this.router.delete('/:id', usuariosController.delete);
    }

}

const datosLogRoutes = new DatosLogRoutes();

export default datosLogRoutes.router;