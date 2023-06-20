import { Schema, model, Document } from "mongoose";

enum Size {
    small = 'small',
    medium = 'medium',
    big = 'big',
    verybig = 'verybig',
}

enum Genre {
    Male = 'femenino',
    Female = 'masculino',
}

export interface IPet extends Document {
    owner: string,
    name: string,
    breed: string,
    size: Size,
    photos: Array<string>,
    genre: Genre,
    collar: boolean,
}

const petSchema = new Schema({
    owner: {
        type: String,
        required: true,
        lowercase: true,
    },
    name: {
        type: String,
        required: true,
        lowercase: true,
    },
    breed: {
        type: String,
        required: true,
        lowercase: true,
    },
    size: {
        type: String,
        required: true,
        lowercase: true,
        enum: ['small', 'medium', 'big', 'verybig']
    },
    photos: {
        type: Array,
        default: []
    },
    genre: {
        type: String,
        required: true,
        lowercase: true,
        enum: ['male', 'female']
    },
    collar: {
        type: Boolean,
    }
},
    {
        timestamps: true,
        versionKey: false,
    })

export default model<IPet>('Pets', petSchema);