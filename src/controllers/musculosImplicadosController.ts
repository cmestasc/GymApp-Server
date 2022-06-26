import {Request, Response} from 'express';

import pool from '../database'

class MusculosImplicadosController {
    public async list (req: Request, res:Response) {
       const musculosImplicados = await pool.query('SELECT * from musculos_implicados');
        res.json(musculosImplicados);
    }
    public async getOne (req: Request, res:Response): Promise<any> {
        const {id} = req.params;
        const musculos = await pool.query('SELECT * FROM musculos_implicados WHERE ID_musculo = ?', [id]);
        musculos.length > 0 ? res.json(musculos[0]) : res.status(404).json({msg: "El musculo no existe"});
    }
    public async getOneId (req: Request, res:Response): Promise<any> {
        const musculos = await pool.query('SELECT * FROM musculos_implicados WHERE musculo = ?', [req.body.musculo]);
        musculos.length > 0 ? res.json(musculos[0]) : res.status(404).json({msg: "El musculo no existe"});
    }
    public async create(req:Request, res:Response): Promise<void>{
        await pool.query('INSERT INTO musculos_implicados set ?', [req.body])
        res.json({text: `Músculo ${req.params.musculo} guardado`})
    }
    public async delete(req:Request, res:Response): Promise<void>{
        const {id} = req.params;
        await pool.query('DELETE from musculos_implicados WHERE ID_musculo = ?', [id]);
        res.json({message: "Musculo eliminado"});
    }
    public async update(req:Request, res:Response): Promise<void>{
        const {id} = req.params;
        await pool.query('UPDATE musculos_implicados set ? WHERE ID_musculo = ?', [req.body, id]);
        res.json({message: "Musculo actualizado"});
    }

}

export const musculosImplicadosController = new MusculosImplicadosController();