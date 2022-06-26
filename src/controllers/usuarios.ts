import {Request, Response} from 'express';
import bcrypt from 'bcrypt';
import pool from '../database';

class UsuariosController {
    public async list (req: Request, res:Response): Promise<any>{
       const usuarios = await pool.query('SELECT * from usuarios');
        res.json(usuarios);
    }

    public async login (req: Request, res:Response): Promise<any> {
        const {usuario, password} = req.body;

        const usuarioIntroducido = await pool.query('SELECT * FROM usuarios WHERE (usuario)=(?)', [usuario]);
        
        if(usuarioIntroducido.length == 0) {
            
            return res.status(404).json({ok: false, msg: 'El usuario no existe'})
        } else {
            const passwordEncriptada = await pool.query('SELECT password FROM usuarios WHERE usuario=?', [usuario])
            const passwordDesencriptada = (passwordEncriptada[0].password).toString();
            const passwordCoinciden = bcrypt.compareSync(password,passwordDesencriptada);
         
            if(!passwordCoinciden){
                return res.status(404).json({ok: false, msg: 'La contraseña es incorrecta'})
            } else{
                const usuarioLogeado = await pool.query('SELECT * FROM usuarios WHERE (usuario, password)=(?,?)', [usuario, password]);
                res.json({ok: true, msg: 'Usuario logeado correctamente'})
            }
        }
        
    }

    public async create(req:Request, res:Response): Promise<void>{
        var {usuario, password} = req.body;

        const salt = bcrypt.genSaltSync();
        password = bcrypt.hashSync(password,salt)

        const existe = await pool.query('SELECT * FROM usuarios WHERE usuario=?', [usuario])
        if(existe.length > 0) {
            res.status(404).json({msg: 'Ese usuario ya existe'});
        } else {
            await pool.query('INSERT INTO usuarios (usuario, password, ID_tipo_usuario) VALUES (?,?,?)', [usuario, password, 3])
            var id = await pool.query('SELECT ID_usuario FROM usuarios WHERE usuario = ?', [usuario])
            res.json({msg: `Usuario almacenado correctamente`, ID: `${id[0].ID_usuario}`})
        }
    }

    public async getID(req:Request, res:Response): Promise<void>{
        var {usuario} = req.body;
        try {
        var data = await pool.query('SELECT * FROM usuarios WHERE usuario = ?', [usuario])
        res.json({usuario: `${data[0].usuario}`, ID_usuario: `${data[0].ID_usuario}`, ID_tipo_usuario: `${data[0].ID_tipo_usuario}`, password: `${data[0].password}`})
    } catch (error) { 
        res.status(404).json({msg: error});
        console.log(error)
    }
    }

    public async delete(req:Request, res:Response): Promise<void>{
        const {ID_usuario} = req.body;
        try {
            await pool.query('DELETE from usuarios WHERE ID_usuario = ?', [ID_usuario]);
            res.json({message: "Usuario eliminado"});
        } catch (error) { 
            res.status(404).json({msg: error});
            console.log(error)
        }
        
    }
    public async update(req:Request, res:Response): Promise<void>{
        const {id} = req.params;
        await pool.query('UPDATE musculos_implicados set ? WHERE ID_musculo = ?', [req.body, id]);
        res.json({message: "Musculo actualizado"});
    }

}

export const usuariosController = new UsuariosController();