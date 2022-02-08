import { Router } from 'express';

import { RouterWays } from '../enums/router';

import { validateIncomeData, validateIdData, validateUpdateData } from '../validators/filmDataValidator';

import FilmController from '../controller/FilmController';

const router = Router();

router.post(RouterWays.createFilmItemUrl, validateIncomeData, FilmController.createFilmItem);
router.delete(RouterWays.removeFilmItem, validateIdData, FilmController.deleteFilmItem);
router.put(RouterWays.changeFilmData, validateIdData, validateUpdateData, FilmController.changeFilmData);

router.get(RouterWays.fetchAllFilmsUrl, FilmController.fetchAllFilms);

export default router;