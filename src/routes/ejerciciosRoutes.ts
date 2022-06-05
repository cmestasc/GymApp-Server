import { Router } from 'express';
import { ejerciciosController } from "../controllers/ejerciciosController";

class EjerciciosRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', ejerciciosController.index);
    }

}

const ejerciciosRoutes = new EjerciciosRoutes();

export default ejerciciosRoutes.router;