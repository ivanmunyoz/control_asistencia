import { Request, Response } from 'express';
import pool from "../database";

class UsuarioController{

    public async list (req: Request, res: Response){
        const usuarios = await pool.query("SELECT * FROM usuario");
        res.json(usuarios);
    }

    public async getOne (req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const usuarios = await pool.query('SELECT * FROM usuario WHERE id_usuario= ?', [id]);
        if (usuarios.length > 0) {
            return res.json(usuarios[0]);
        }
        res.status(404).json({text: 'No se ha encontrado el usuario solicitado'});
    }

    public async create (req: Request, res: Response): Promise<void>{
        await pool.query('INSERT INTO usuario set ?', req.body);
        res.json({message: 'Usuario creado'});
    }

    public async update (req: Request, res: Response): Promise<void>{
        const { id } = req.params;
        await pool.query('UPDATE usuario set ? WHERE id_usuario= ?', [req.body, id]);
        res.json({message: 'Usuario actualizado'});
    }

    public async delete (req: Request, res: Response): Promise<void>{
        const { id } = req.params;
        await pool.query('DELETE FROM usuario WHERE id_usuario= ?', [id]);
        res.json({message: 'Se ha borrado el usuario'});
    }

}

export const usuarioController = new UsuarioController();