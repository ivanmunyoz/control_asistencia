import { Request, Response } from 'express';
import pool from "../database";

class GrupoController{

    public async list (req: Request, res: Response){
        const grupos = await pool.query("SELECT * FROM grupos");
        res.json(grupos);
    }

    public async getOne (req: Request, res: Response): Promise<any> {
        const id_grp = req.params.id_grp;
        const grupos = await pool.query('SELECT * FROM grupos WHERE id_grupo= ?', [id_grp]);
        if (grupos.length > 0) {
            return res.json(grupos[0]);
        }
        res.status(404).json({text: 'No se ha encontrado el grupo solicitado'});
    }

    public async create (req: Request, res: Response): Promise<void>{
        await pool.query('INSERT INTO grupos set ?', req.body);
        res.json({message: 'grupo creado'});
    }

    public async update (req: Request, res: Response): Promise<void>{
        const id_grp = req.params.id_grp;
        await pool.query('UPDATE grupos set ? WHERE id_grupo= ?', [req.body, id_grp]);
        res.json({message: 'grupo actualizado'});
    }

    public async delete (req: Request, res: Response): Promise<void>{
        const id_grp = req.params.id_grp;
        await pool.query('DELETE FROM grupos WHERE id_grupo=?', [id_grp]);
        res.json({message: 'Se ha borrado el grupo'});
    }

    public async getGroupUser (req: Request, res: Response): Promise<any>{
        const id_usr = req.params.id_usr;
        const grupos = await pool.query('SELECT * FROM grupos WHERE id_usuario=?',[id_usr]);
        if (grupos.length > 0) {
            return res.json(grupos[0]);
        }
        res.json({message: 'No hay grupos por usuario'});
    }

    public async getGroupClass(req: Request, res: Response): Promise<any>{
        const id_clas = req.params.id_clas;
        const grupos = await pool.query('SELECT * FROM grupos WHERE id_clase=?',[id_clas]);
        if (grupos.length > 0) {
            return res.json(grupos[0]);
        }
        res.json({message: 'No hay grupos por clase'});
    }

}

export const grupoController = new GrupoController();