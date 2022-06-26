import { Router } from 'express';
import { ejerciciosController } from '../controllers/ejercicios';
import { rutinasController } from '../controllers/rutinas';

class RutinasRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.post('/', rutinasController.getAll);
        this.router.post('/ejercicio', rutinasController.getDatosEjercicios);
        this.router.post('/create', rutinasController.create);
    }

}

const rutinasRoutes = new RutinasRoutes();

export default rutinasRoutes.router;