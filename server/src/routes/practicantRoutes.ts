import {Router} from 'express';
import {practicantController} from '../controllers/practicantController';

class PracticantRoutes {
    public router: Router = Router();

    constructor() {
    this.config();
    }

    config():void {
        this.router.get('/', practicantController.list);
        this.router.get('/:id', practicantController.getByid);
        this.router.post('/',practicantController.create);
        this.router.delete('/:id', practicantController.delete);
        this.router.put('/:id', practicantController.update);
        this.router.post('/login', practicantController.login);
    }
}

const practicantRoutes = new PracticantRoutes();
export default practicantRoutes.router;