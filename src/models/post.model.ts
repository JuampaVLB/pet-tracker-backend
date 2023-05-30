import { Schema, model, Document } from "mongoose";

export interface IPost extends Document {
    username: string,
    title: string,
    desc: string,
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
    }
},
{
    timestamps: true,
    versionKey: false,
})

export default model<IPost>('Post', postSchema);