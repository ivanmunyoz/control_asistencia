import { Request, Response } from 'express';
import pool from "../database";

class CicloController{

    public async list (req: Request, res: Response){
        const ciclos = await pool.query("SELECT * FROM ciclos");
        res.json(ciclos);
    }

    public async getOne (req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const ciclos = await pool.query('SELECT * FROM ciclos WHERE id_ciclo= ?', [id]);
        if (ciclos.lenght > 0) {
            return res.json(ciclos[0]);
        }
        res.status(404).json({text: 'No se ha encontrado el ciclo solicitado'});
    }

    public async create (req: Request, res: Response): Promise<void>{
        await pool.query('INSERT INTO ciclos set ?', req.body);
        res.json({message: 'Ciclo creado'});
    }

    public async update (req: Request, res: Response): Promise<void>{
        const { id } = req.params;
        await pool.query('UPDATE ciclos set ? WHERE id_ciclo= ?', [req.body, id]);
        res.json({message: 'Ciclo actualizado'});
    }

    public async delete (req: Request, res: Response): Promise<void>{
        const { id } = req.params;
        await pool.query('DELETE FROM ciclos WHERE id_ciclo= ?', [id]);
        res.json({message: 'Se ha borrado el ciclo'});
    }

}

export const cicloController = new CicloController();