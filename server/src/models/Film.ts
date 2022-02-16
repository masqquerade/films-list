import { Schema, model } from 'mongoose';

const Film = new Schema({
    title: { type: String, required: true },
    body: { type: String, required: true },
    logo: { type: String },
    iviLink: String,
    reviewsLink: String,
    rating: Number,
    realeseDate: Number,
    genre: String,
    fullSizeLogo: String
});

export default model('Film', Film);