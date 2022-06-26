import {Request, Response} from 'express';
import pool from '../database'

class TipoRutinaController {

    public async getAll (req: Request, res:Response) {
        const tipo_rutina = await pool.query('SELECT * from tipo_rutina');
         res.json(tipo_rutina);
     }

}

export const tipoRutinaController = new TipoRutinaController()