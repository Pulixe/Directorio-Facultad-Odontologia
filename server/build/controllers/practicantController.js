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
exports.practicantController = void 0;
const db_1 = __importDefault(require("../db"));
class PracticantController {
    list(_req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const practicant = yield db_1.default.query('SELECT * FROM practicants');
            res.status(200).json(practicant);
        });
    }
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const email = req.body.email;
            const password = req.body.password;
            const login = yield db_1.default.query('SELECT * FROM practicants WHERE  email= ? AND password=?', [email, password]);
            if (login.length > 0) {
                return res.status(200).json({ message: "login exitoso", respon: "OK", name: login[0]['name'] });
            }
            else {
                res.json({ message: 'login fallido', respon: "NOT OK" });
            }
        });
    }
    getByid(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //deestructuracion para obtener un solo paciente a traves de su ID
            const { id } = req.params;
            const practicant = yield db_1.default.query('SELECT * FROM practicants WHERE id = ?', [id]);
            if (practicant.length > 0) {
                return res.json(practicant[0]);
            }
            else {
                res.status(404).json({ message: 'practicante no encontrado' });
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //CREAR A PARTIR DE CONSULTA DE SQL
            //almacenar los datos en la base de datos
            yield db_1.default.query('INSERT INTO practicants set ?', [req.body]);
            res.status(200).json({ message: 'practicante Creado' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield db_1.default.query('UPDATE practicants set ? WHERE id = ?', [req.body, id]);
            res.json({ message: 'practicante actualizado' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield db_1.default.query('DELETE FROM practicants WHERE id = ?', [id]);
            res.json({ message: 'practicante eliminado' });
        });
    }
}
exports.practicantController = new PracticantController();
