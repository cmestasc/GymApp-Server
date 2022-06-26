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
        try {
        await pool.query('INSERT INTO datos_usuario (nombre, apellidos, edad, peso, altura, ciudad, pais, email, ID_usuario) VALUES (?,?,?,?,?,?,?,?,?)', [req.body.nombre,req.body.apellidos,req.body.edad,req.body.peso,req.body.altura,req.body.ciudad,req.body.pais,req.body.email,req.body.ID_usuario])
        res.json({text: `Datos de usuario guardados`})
    } catch (error) {
        res.status(404).json({msg: error})
    }
    }
    public async delete(req:Request, res:Response): Promise<void>{
        const {ID_usuario} = req.body;
        try {
            await pool.query('DELETE from datos_usuario WHERE ID_usuario = ?', [ID_usuario]);
            res.json({message: "Datos eliminados"});
        } catch (error) { 
            res.status(404).json({msg: error});
            console.log(error)
        }
    }
    public async update(req:Request, res:Response): Promise<void>{
        try {
            const {nombre, apellidos, edad, peso, altura, ciudad, pais, email, ID_usuario} = req.body;
            const update = await pool.query('UPDATE datos_usuario set ?, ?, ?, ?, ?, ?, ?, ? WHERE ?', [{nombre}, {apellidos}, {edad}, {peso}, {altura}, {ciudad}, {pais}, {email}, {ID_usuario}]);
            res.json({msg: "Datos actualizados correctamente"});
        } catch (error) { 
            res.status(404).json({msg: error});
            console.log(error)
        }
    }

}

export const datosUsuarioController = new DatosUsuarioController();