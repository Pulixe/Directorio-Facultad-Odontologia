"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const patientController_1 = require("../controllers/patientController");
class PatientRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', patientController_1.patientController.list);
        this.router.get('/:id', patientController_1.patientController.getByid);
        this.router.post('/', patientController_1.patientController.create);
        this.router.delete('/:id', patientController_1.patientController.delete);
        this.router.put('/:id', patientController_1.patientController.update);
    }
}
const patientRoutes = new PatientRoutes();
exports.default = patientRoutes.router;
