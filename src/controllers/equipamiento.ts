import {Request, Response} from 'express';
import pool from '../database'

class EquipamientoController {

    public async getAll (req: Request, res:Response) {
        const equipamiento = await pool.query('SELECT * from equipamiento');
         res.json(equipamiento);
     }

}

export const equipamientoController = new EquipamientoController()