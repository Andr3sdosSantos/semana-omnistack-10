import { Router } from 'express';

import DevController from './controllers/DevController';
import SearchController from './controllers/SearchController';

const routes = Router();

routes.post('/devs', DevController.store);
routes.get('/devs', DevController.index);
// Usada para o mobile
routes.get('/search', SearchController.index);
routes.get('/destroy', DevController.index);

export default routes;
