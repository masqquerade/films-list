import { Schema, model } from 'mongoose';

const Film = new Schema({
    title: { type: String, required: true },
    body: { type: String, required: true },
    logo: { type: String },
    iviLink: String,
    trailerLink: String,
    rating: Number,
    realeseDate: Number,
    fullSizeLogo: String
});

export default model('Film', Film);