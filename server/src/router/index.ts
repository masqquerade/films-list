import { Router } from 'express';

import { RouterWays } from '../enums/router';

import { validateIdData, validateUpdateData } from '../validators/filmDataValidator';
import { validateIncomeCommentData, validateCommentIdData } from '../validators/commentDataValidator';
import fileMiddleware from '../middlewares/file-middleware';

import FilmController from '../controller/FilmController';
import CommentController from '../controller/CommentController';

const router = Router();

router.post(RouterWays.createFilmItemUrl, <any>fileMiddleware.single('logo'), FilmController.createFilmItem);
router.delete(RouterWays.removeFilmItem, validateIdData, FilmController.deleteFilmItem);
router.put(RouterWays.changeFilmData, validateIdData, validateUpdateData, FilmController.changeFilmData);

router.get(RouterWays.fetchAllFilmsUrl, FilmController.fetchAllFilms);
router.get(RouterWays.fetchFilmDataUrl, FilmController.fetchFilmData);

router.post(RouterWays.createCommentUrl, validateIncomeCommentData, CommentController.createComment);
router.get(RouterWays.fetchAllCommentsUrl, validateCommentIdData, CommentController.fetchAllComments);

export default router;