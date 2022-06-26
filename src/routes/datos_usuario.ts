import { Router } from 'express';
import { datosUsuarioController } from '../controllers/datos_usuarios';

class DatosUsuarioRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', datosUsuarioController.list);
        this.router.post('/', datosUsuarioController.getOne);
        this.router.post('/insertDatos', datosUsuarioController.create);
        this.router.put('/:id', datosUsuarioController.update);
        this.router.delete('/delete', datosUsuarioController.delete);
    }

}

const datosUsuarioRoutes = new DatosUsuarioRoutes();

export default datosUsuarioRoutes.router;