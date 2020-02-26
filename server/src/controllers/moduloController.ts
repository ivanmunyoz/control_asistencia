import { Request, Response } from 'express';
import pool from "../database";

class ModuloController{

    public async list (req: Request, res: Response){
        const id = req.params.id;
        const modulos = await pool.query("SELECT * FROM modulos WHERE id_ciclo=?",[id]);
        res.json(modulos);
    }

    public async getOne (req: Request, res: Response): Promise<any> {
        const id_mod = req.params.id_mod;
        const id_cic = req.params.id;
        const modulos = await pool.query('SELECT * FROM modulos WHERE id_modulo= ? AND id_ciclo= ?', [id_mod, id_cic]);
        if (modulos.length > 0) {
            return res.json(modulos[0]);
        }
        res.status(404).json({text: 'No se ha encontrado el modulo solicitado'});

    }

    public async create (req: Request, res: Response): Promise<void>{
        const id_cic = req.body.id_ciclo;
        const mod_nom = req.body.nombre;
        const mod_desc = req.body.descripcion;
        const mod_hora = req.body.horas_totales;
        const consulta = await pool.query("SELECT id_ciclo FROM ciclos WHERE id_ciclo= ?", id_cic);
        if(consulta.length != 0){
            await pool.query('INSERT INTO modulos set id_ciclo=(SELECT id_ciclo FROM ciclos WHERE id_ciclo= ?), nombre= ?, descripcion= ?, horas_totales= ? ', [id_cic, mod_nom, mod_desc, mod_hora]);
            res.json({message: 'Módulo creado'});
        }else{
            res.json({message: 'No se ha podido crear el módulo'});
        }

    }

    public async update (req: Request, res: Response): Promise<void>{
        const id_mod = req.params.id_mod;
        const id_cic = req.body.id_ciclo;
        const mod_nom = req.body.nombre;
        const mod_desc = req.body.descripcion;
        const mod_hora = req.body.horas_totales;
        const consulta_cic = await pool.query("SELECT id_ciclo FROM ciclos WHERE id_ciclo= ?", id_cic);
        const consulta_mod = await pool.query("SELECT id_modulo FROM modulos WHERE id_modulo= ?", id_mod);
        if(consulta_cic.length != 0 && consulta_mod.length != 0){
            await pool.query('UPDATE modulos set id_ciclo=(SELECT id_ciclo FROM ciclos WHERE id_ciclo= ?), nombre= ?, descripcion= ?, horas_totales= ? WHERE id_modulo= ?', [id_cic, mod_nom, mod_desc, mod_hora, id_mod]);
            res.json({message: 'Módulo actualizado'});
        }else{
            res.json({message: 'No se ha podido actualizar el módulo'});
        }
    }

    public async delete (req: Request, res: Response): Promise<void>{
        const id_mod = req.params.id_mod;
        await pool.query('DELETE FROM modulos WHERE id_modulo= ?', [id_mod]);
        res.json({message: 'Se ha borrado el modulo'});
    }

}

export const moduloController = new ModuloController();