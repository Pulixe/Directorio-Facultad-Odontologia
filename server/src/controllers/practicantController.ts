import {Request, Response} from 'express';
import db from '../db';

class PracticantController {

    public async list ( _req: Request , res:Response):Promise<any> {
        const practicant = await db.query('SELECT * FROM practicants');
        res.status(200).json(practicant);
    }

    public async login(req: Request, res:Response ):Promise<any>{
        const  email  = req.body.email;
        const  password = req.body.password;
        const login = await db.query('SELECT * FROM practicants WHERE  email= ? AND password=?',[email,password]);
        if (login.length > 0){
            return res.status(200).json({message:"login exitoso",respon:"OK", name:login[0]['name']});

        }else{
            res.json({message: 'login fallido',respon:"NOT OK"});
        }
    }

    public async getByid (req: Request , res:Response):Promise<any>{
        //deestructuracion para obtener un solo paciente a traves de su ID
        const { id } = req.params;
        const practicant = await db.query('SELECT * FROM practicants WHERE id = ?', [id]);
        if (practicant.length > 0){
            return res.json(practicant[0]);
        }else{
            res.status(404).json({message: 'practicante no encontrado'});
        }
        
    }

    public async create (req:Request, res:Response):Promise<void>{
        //CREAR A PARTIR DE CONSULTA DE SQL
        //almacenar los datos en la base de datos
        await db.query('INSERT INTO practicants set ?', [req.body]);
        res.status(200).json({ message: 'practicante Creado' });
    }

    public async update (req:Request, res:Response):Promise<void>{
        const { id } = req.params;
        await db.query('UPDATE practicants set ? WHERE id = ?', [req.body, id]);
        res.json({message:'practicante actualizado'}); 
    }

    public async delete (req:Request, res:Response):Promise<void>{
        const { id } = req.params;
        await db.query('DELETE FROM practicants WHERE id = ?',[id]);
        res.json({message: 'practicante eliminado'});
    }


}


export const practicantController = new PracticantController();