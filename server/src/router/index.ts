import { Router } from 'express';

import { RouterWays } from '../enums/router';

const router = Router();

router.post(RouterWays.createFilmItemUrl);