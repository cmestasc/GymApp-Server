import { Router } from 'express';
import { ejerciciosController } from '../controllers/ejercicios';

class EjerciciosRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.post('/', ejerciciosController.getAll);
        this.router.post('/ejercicio', ejerciciosController.getDatosEjercicios);
        this.router.post('/create', ejerciciosController.create);
    }

}

const ejerciciosRoutes = new EjerciciosRoutes();

export default ejerciciosRoutes.router;