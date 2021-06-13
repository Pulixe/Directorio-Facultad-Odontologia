import {Request, Response} from 'express';
import db from '../db';

//creacion de funciones CRUD
class PatientController {

    public async list ( _req: Request , res:Response):Promise<any> {
        const patients = await db.query('SELECT * FROM patients');
        res.status(200).json(patients);
    }

    public async getByid (req: Request , res:Response):Promise<any>{
        //deestructuracion para obtener un solo paciente a traves de su ID
        const { id } = req.params;
        const patients = await db.query('SELECT *FROM patients WHERE id = ?', [id]);
        if (patients.length > 0){
            return res.json(patients[0]);
        }else{
            res.status(404).json({text: 'paciente no encontrado'});
        }
        
    }

    public async create (req:Request, res:Response):Promise<void>{
        //CREAR A PARTIR DE CONSULTA DE SQL
        //almacenar los datos en la base de datos
        await db.query('INSERT INTO patients set ?', [req.body]);
        res.status(200).json({ paciente: 'Creado' });
    }

    public async update (req:Request, res:Response):Promise<void>{
        const { id } = req.params;
        await db.query('UPDATE patients set ? WHERE id = ?', [req.body, id]);
        res.json({message:'paciente actualizado'}); 
    }

    public async delete (req:Request, res:Response):Promise<void>{
        const { id } = req.params;
        await db.query('DELETE FROM patients WHERE id = ?',[id]);
        res.json({message: 'paciente eliminado'});
    }

    
}

export const patientController = new PatientController();
