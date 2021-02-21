import * as mongoose from "mongoose";

export const AstronautSchema = new mongoose.Schema({
    name: String,
    age: Number,
    surname: String,
    agency: String,
})