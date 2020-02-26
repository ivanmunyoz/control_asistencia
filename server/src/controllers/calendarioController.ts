import { Request, Response } from 'express';
import pool from "../database";

class CalendarioController{

    public async list (req: Request, res: Response){
        const calendarios = await pool.query("SELECT * FROM calendario");
        res.json(calendarios);
    }

    public async getOne (req: Request, res: Response): Promise<any> {
        const id = req.params.id_cal;
        console.log(id)
        const calendarios = await pool.query('SELECT * FROM calendario WHERE id_calendario= ?', [id]);
        if (calendarios.length > 0) {
            return res.json(calendarios[0]);
        }
        res.status(404).json({text: 'No se ha encontrado el calendario solicitado'});
    }

    public async create (req: Request, res: Response): Promise<void>{
        await pool.query('INSERT INTO calendario set ?', req.body);
        res.json({message: 'Calendario creado'});
    }

    public async update (req: Request, res: Response): Promise<void>{
        const id = req.params.id_cal;
        await pool.query('UPDATE calendario set ? WHERE id_calendario= ?', [req.body, id]);
        res.json({message: 'Calendario actualizado'});
    }

    public async delete (req: Request, res: Response): Promise<void>{
        const id = req.params.id_cal;
        await pool.query('DELETE FROM calendario WHERE id_calendario= ?', [id]);
        res.json({message: 'Se ha borrado el calendario'});
    }

}

export const calendarioController = new CalendarioController();