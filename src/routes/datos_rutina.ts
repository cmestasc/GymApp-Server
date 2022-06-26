import { Router } from 'express';
import { usuariosController } from '../controllers/usuarios';
import { datosRutinaController } from '../controllers/datos_rutina';

class DatosRutinaRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.post('/', datosRutinaController.listAll);
        this.router.post('/rutina', datosRutinaController.listRutina);
        this.router.post('/login', datosRutinaController.login);
        this.router.put('/:id', datosRutinaController.update);
        this.router.delete('/:id', datosRutinaController.delete);
    }

}

const datosRutinaRoutes = new DatosRutinaRoutes();

export default datosRutinaRoutes.router;