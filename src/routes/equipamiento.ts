import { Router } from 'express';
import { tipoRutinaController } from '../controllers/tipo_rutina';
import { equipamientoController } from '../controllers/equipamiento';

class EquipamientoRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.post('/', equipamientoController.getAll);
    }

}

const equipamientoRoutes = new EquipamientoRoutes();

export default equipamientoRoutes.router;