import { Request, Response } from 'express';
import pool from "../database";

class GrupoController{

    public async list (req: Request, res: Response){
        const grupos = await pool.query("SELECT * FROM grupo");
        res.json(grupos);
    }

    public async getOne (req: Request, res: Response): Promise<any> {
        const id_grp = req.params.id_grp;
        const grupos = await pool.query('SELECT * FROM grupo WHERE id_grupo= ?', [id_grp]);
        if (grupos.length > 0) {
            return res.json(grupos[0]);
        }
        res.status(404).json({text: 'No se ha encontrado el grupo solicitado'});
    }

    public async create (req: Request, res: Response): Promise<void>{
        await pool.query('INSERT INTO grupo set ?', req.body);
        res.json({message: 'grupo creado'});
    }

    public async update (req: Request, res: Response): Promise<void>{
        const id_grp = req.params.id_grp;
        await pool.query('UPDATE grupo set ? WHERE id_grupo= ?', [req.body, id_grp]);
        res.json({message: 'grupo actualizado'});
    }

    public async delete (req: Request, res: Response): Promise<void>{
        const id_grp = req.params.id_grp;
        await pool.query('DELETE FROM grupo WHERE id_grupo= ?', [id_grp]);
        res.json({message: 'Se ha borrado el grupo'});
    }

}

export const grupoController = new GrupoController();