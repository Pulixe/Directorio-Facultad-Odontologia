import {Router} from 'express';
import {patientController} from '../controllers/patientController';

class PatientRoutes {
    public router: Router = Router();

    constructor() {
    this.config();
    }

    config():void {
        this.router.get('/', patientController.list);
        this.router.get('/:id', patientController.getByid);
        this.router.post('/',patientController.create);
        this.router.delete('/:id', patientController.delete);
        this.router.put('/:id', patientController.update);
    }
}

const patientRoutes = new PatientRoutes();
export default patientRoutes.router;