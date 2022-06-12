import express, {Application} from "express";
import morgan from 'morgan';
import cors from 'cors';

import indexRoutes from './routes/indexRoutes'
import ejerciciosRoutes from './routes/ejerciciosRoutes';
import musculosImplicadosRoutes from "./routes/musculosImplicadosRoutes";
import tipoUsuarioRoutes from "./routes/tipo_usuarios";
import usuariosRoutes from './routes/usuarios';

class Server {
    public app: Application;
    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }
    config() : void {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));

    }

    routes() : void {
        this.app.use('/',indexRoutes);
        this.app.use('/api/ejercicios',ejerciciosRoutes);
        this.app.use('/api/musculosImplicados',musculosImplicadosRoutes);
        this.app.use('/api/tipoUsuario',tipoUsuarioRoutes);
        this.app.use('/api/usuarios',usuariosRoutes);
    }

    start() : void {
        this.app.listen(this.app.get('port'), () =>{
            console.log('Server on port', this.app.get('port'))
        })
    }
}

const server = new Server();
server.start();