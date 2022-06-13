import {Request, Response} from 'express';

import pool from '../database'

class DatosUsuarioController {
    public async list (req: Request, res:Response) {
       const tipo_usuario = await pool.query('SELECT * from tipo_usuario');
        res.json(tipo_usuario);
    }
    public async getOne (req: Request, res:Response): Promise<any> {
        const {ID_usuario} = req.body;
        try {
            const data = await pool.query('SELECT * FROM datos_usuario WHERE ID_usuario = ?', [ID_usuario]);
            data.length > 0 ? res.json(data[0]) : res.status(404).json({msg: "Ese usuario no existe"})
        } catch (error) {
            res.status(404).json({msg: error})
        }
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

export const datosUsuarioController = new DatosUsuarioController();