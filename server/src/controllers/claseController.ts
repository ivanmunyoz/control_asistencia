import { Request, Response } from 'express';
import pool from "../database";

class ClaseController{

    public async list (req: Request, res: Response){
        const clases = await pool.query("SELECT * FROM clase");
        res.json(clases);
    }

    public async getOne (req: Request, res: Response): Promise<any> {
        const id_clas = req.params.id_clas;
        const clases = await pool.query('SELECT * FROM clase WHERE id_clase= ?', [id_clas]);
        if (clases.length > 0) {
            return res.json(clases[0]);
        }
        res.status(404).json({text: 'No se ha encontrado la clase solicitado'});
    }

    public async create (req: Request, res: Response): Promise<void>{
        await pool.query('INSERT INTO clase set ?', req.body);
        res.json({message: 'Clase creada'});
    }

    public async update (req: Request, res: Response): Promise<void>{
        const id_clas = req.params.id_clas;
        await pool.query('UPDATE clase set ? WHERE id_clase= ?', [req.body, id_clas]);
        res.json({message: 'clase actualizada'});
    }

    public async delete (req: Request, res: Response): Promise<void>{
        const id_clas = req.params.id_clas;
        await pool.query('DELETE FROM clase WHERE id_clase= ?', [id_clas]);
        res.json({message: 'Se ha borrado la clase'});
    }

}

export const claseController = new ClaseController();