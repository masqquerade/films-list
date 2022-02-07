import { Router } from 'express';

import { RouterWays } from '../enums/router';

import { validateIncomeData } from '../validators/filmDataValidator';

import FilmController from '../controller/FilmController';

const router = Router();

router.post(RouterWays.createFilmItemUrl, validateIncomeData, FilmController.createFilmItem);

export default router;