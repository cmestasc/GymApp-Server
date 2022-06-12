import { Router } from 'express';
import { tipoUsuarioController } from '../controllers/tipo_usuarios';

class TipoUsuarioRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', tipoUsuarioController.list);
        this.router.get('/:id', tipoUsuarioController.getOne);
        this.router.post('/:musculo', tipoUsuarioController.create);
        this.router.put('/:id', tipoUsuarioController.update);
        this.router.delete('/:id', tipoUsuarioController.delete);
    }

}

const tipoUsuarioRoutes = new TipoUsuarioRoutes();

export default tipoUsuarioRoutes.router;