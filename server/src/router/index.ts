import { Router } from 'express';

import { RouterWays } from '../enums/router';

import { validateIncomeData, validateIdData } from '../validators/filmDataValidator';

import FilmController from '../controller/FilmController';

const router = Router();

router.post(RouterWays.createFilmItemUrl, validateIncomeData, FilmController.createFilmItem);
router.delete(RouterWays.removeFilmItem, validateIdData, FilmController.deleteFilmItem)

export default router;