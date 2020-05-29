import { Request, Response } from 'express';
import pool from "../database";

class AsistenciaController{

    public async list (req: Request, res: Response){
        const asistencias = await pool.query("SELECT * FROM asistencia");
        res.json(asistencias);
    }

    public async getOne (req: Request, res: Response): Promise<any> {
        const id_asis = req.params.id_asis;
        const asistencias = await pool.query('SELECT * FROM asistencia WHERE id_asistencia= ?', [id_asis]);
        if (asistencias.length > 0) {
            return res.json(asistencias[0]);
        }
        res.status(404).json({text: 'No se ha encontrado la asistencia solicitada'});

    }

    public async create (req: Request, res: Response): Promise<void>{
        await pool.query('INSERT INTO asistencia set ?', req.body);
        res.json({message: 'Asistencia creada'});
    }

    public async update (req: Request, res: Response): Promise<void>{
        const id_asis = req.params.id_asis;
        await pool.query('UPDATE asistencia set ? WHERE id_asis= ?', [req.body, id_asis]);
        res.json({message: 'Asistencia actualizada'});
    }

    public async delete (req: Request, res: Response): Promise<void>{
        const id_asis = req.params.id_asis;
        await pool.query('DELETE FROM asistencia WHERE id_asistencia= ?', [id_asis]);
        res.json({message: 'Se ha borrado la asistencia'});
    }

    public async asistByUser(req: Request, res: Response){
        const id_usr = req.params.id_usr;
        const asistencias = await pool.query('SELECT * FROM asistencia WHERE id_alumno=?', [id_usr]);
        if (asistencias.length > 0) {
            return res.json(asistencias);
        }
        res.status(404).json({text: 'No se han encontrado la asistencia solicitada'});
    }

    public async asistByClass(req: Request, res: Response){
        const id_clas = req.params.id_clas;
        const asistencias = await pool.query('SELECT * FROM asistencia WHERE id_clase=?', [id_clas]);
        if (asistencias.length > 0) {
            return res.json(asistencias);
        }
        res.status(404).json({text: 'No se han encontrado la asistencia solicitada'});
    }

}

export const asistenciaController = new AsistenciaController();