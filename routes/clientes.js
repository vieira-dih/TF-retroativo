import { Router } from 'express';

import CreateClienteController from '../app/Controllers/Cliente/CreateClienteController.js';
import GetClienteController from '../app/Controllers/Cliente/GetClienteController.js';
import ListClienteController from '../app/Controllers/Cliente/ListClienteController.js';
import UpdateClienteController from '../app/Controllers/Cliente/UpdateClienteController.js';
import DeleteClienteController from '../app/Controllers/Cliente/DeleteClienteController.js';

const router = Router();

router.post('/', CreateClienteController);

router.get('/', ListClienteController);

router.get('/:codigo', GetClienteController);

router.put('/:codigo', UpdateClienteController);

router.delete('/:codigo', DeleteClienteController);

export default router;
