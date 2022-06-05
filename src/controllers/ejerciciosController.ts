import {Request, Response} from 'express';

import pool from '../database'

class EjerciciosController {
    public index (req: Request, res:Response) {
        pool.query('DESCRIBE ejercicios');
        res.json('ejercicios');
    }

}

export const ejerciciosController = new EjerciciosController();