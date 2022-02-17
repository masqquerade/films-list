import { Schema, model } from 'mongoose';

const Comment = new Schema({
    filmId: { type: String, required: true },
    owner: String,
    body: String,
    stars: Number
});

export default model('Comment', Comment);