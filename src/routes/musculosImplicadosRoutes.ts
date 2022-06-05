import { Router } from 'express';
import { musculosImplicadosController } from '../controllers/musculosImplicadosController';

class MusculosImplicadosRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', musculosImplicadosController.list);
        this.router.get('/:id', musculosImplicadosController.getOne);
        this.router.post('/:musculo', musculosImplicadosController.create);
        this.router.put('/:id', musculosImplicadosController.update);
        this.router.delete('/:id', musculosImplicadosController.delete);
    }

}

const musculosImplicadosRoutes = new MusculosImplicadosRoutes();

export default musculosImplicadosRoutes.router;