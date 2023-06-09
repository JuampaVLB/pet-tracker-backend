import { Schema, model, Document } from "mongoose";

export interface IPost extends Document {
    username: string,
    title: string,
    desc: string,
    room: string,
    comments: Array<object>,
    image: Array<string>,
}

const postSchema = new Schema({
    username: {
        type: String,
        required: true,
        lowercase: true,
    },
    title: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    room: {
        type: String,
        required: true,
        unique: true
    },
    comments: {
        type: Array,
    },
    image: {
        type: Array,
    }
},
{
    timestamps: true,
    versionKey: false,
})

export default model<IPost>('Post', postSchema);