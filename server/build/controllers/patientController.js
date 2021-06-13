"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.patientController = void 0;
const db_1 = __importDefault(require("../db"));
//creacion de funciones CRUD
class PatientController {
    list(_req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const patients = yield db_1.default.query('SELECT * FROM patients');
            res.status(200).json(patients);
        });
    }
    getByid(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //deestructuracion para obtener un solo paciente a traves de su ID
            const { id } = req.params;
            const patients = yield db_1.default.query('SELECT *FROM patients WHERE id = ?', [id]);
            if (patients.length > 0) {
                return res.json(patients[0]);
            }
            else {
                res.status(404).json({ text: 'paciente no encontrado' });
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //CREAR A PARTIR DE CONSULTA DE SQL
            //almacenar los datos en la base de datos
            yield db_1.default.query('INSERT INTO patients set ?', [req.body]);
            res.status(200).json({ paciente: 'Creado' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield db_1.default.query('UPDATE patients set ? WHERE id = ?', [req.body, id]);
            res.json({ message: 'paciente actualizado' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield db_1.default.query('DELETE FROM patients WHERE id = ?', [id]);
            res.json({ message: 'paciente eliminado' });
        });
    }
}
exports.patientController = new PatientController();
