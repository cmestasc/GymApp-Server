import {Request, Response} from 'express';
import pool from '../database'

class EjerciciosController {

    public async getAll (req: Request, res:Response) {
        try {
        const ejercicios = await pool.query('SELECT * from ejercicios');
         res.json(ejercicios);
        } catch (error) {
            res.status(404).json({msg: error});
        }
     }

     public async getDatosEjercicios (req: Request, res:Response) {
        try {
        const ejercicio = await pool.query('SELECT * from ejercicios WHERE ID_musculo = ?', [req.body.ID_musculo]);
         res.json(ejercicio);
        } catch (error) {
            res.status(404).json({msg: error});
        }
     }

     public async delete (req: Request, res:Response) {
        try {
            const {ID_ejercicio} = req.body;
            const ejercicio = await pool.query('DELETE from ejercicios WHERE ?', [{ID_ejercicio}]);
            res.json(ejercicio);
        } catch (error) {
            res.status(404).json({msg: error});
        }
     }

     public async create(req:Request, res:Response): Promise<void>{
        try {
            await pool.query('INSERT INTO ejercicios (nombre_ejercicio, ID_musculo, ID_equipamiento, realizacion, video) VALUES (?,?,?,?,?)', [req.body.nombre_ejercicio,req.body.ID_musculo,req.body.ID_equipamiento,req.body.realizacion,req.body.video])
            res.json({msg: `Ejercicio ${req.body.nombre_ejercicio} agregado correctamente`})
        } catch (error) {
            res.status(404).json({msg: error});
        }
    }

}

export const ejerciciosController = new EjerciciosController()