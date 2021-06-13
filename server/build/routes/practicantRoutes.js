"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const practicantController_1 = require("../controllers/practicantController");
class PracticantRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', practicantController_1.practicantController.list);
        this.router.get('/:id', practicantController_1.practicantController.getByid);
        this.router.post('/', practicantController_1.practicantController.create);
        this.router.delete('/:id', practicantController_1.practicantController.delete);
        this.router.put('/:id', practicantController_1.practicantController.update);
        this.router.post('/login', practicantController_1.practicantController.login);
    }
}
const practicantRoutes = new PracticantRoutes();
exports.default = practicantRoutes.router;
