import { Router } from 'express';

import { RouterWays } from '../enums/router';

import { validateIncomeData, validateIdData, validateUpdateData } from '../validators/filmDataValidator';
import fileMiddleware from '../middlewares/file-middleware';

import FilmController from '../controller/FilmController';

const router = Router();

router.post(RouterWays.createFilmItemUrl, <any>fileMiddleware.single('logo'), FilmController.createFilmItem);
router.delete(RouterWays.removeFilmItem, validateIdData, FilmController.deleteFilmItem);
router.put(RouterWays.changeFilmData, validateIdData, validateUpdateData, FilmController.changeFilmData);

router.get(RouterWays.fetchAllFilmsUrl, FilmController.fetchAllFilms);

export default router;