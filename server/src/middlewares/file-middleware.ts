import multer from 'multer';
import { Request } from 'express';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images')
    },

    filename: (req, file, cb) => {
        console.log(file)
        cb(null, file.originalname)
    }
});

const multerTypes = ['image/png', 'image/jpeg', 'image/jpg'];

const fileFilter = (req: Request, file: Express.Multer.File, cb: Function) => {
    if (multerTypes.includes(file.mimetype)) {
        cb(null, true);
    };
    
    cb(null, false);
};

export default multer({ storage, fileFilter });