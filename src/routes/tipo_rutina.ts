import { Router } from 'express';
import { tipoRutinaController } from '../controllers/tipo_rutina';

class TipoRutinaRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.post('/', tipoRutinaController.getAll);
    }

}

const tipoRutinaRoutes = new TipoRutinaRoutes();

export default tipoRutinaRoutes.router;