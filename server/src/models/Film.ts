import { Schema, model } from 'mongoose';

const Film = new Schema({
    title: { type: String, required: true },
    body: { type: String, required: true },
    logo: { type: String },
    iviLink: String,
    reviewsLink: String,
    rating: Number,
    realeseDate: Number
});

export default model('Film', Film);