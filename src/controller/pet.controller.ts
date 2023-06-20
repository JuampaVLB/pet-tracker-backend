import { Request, Response } from 'express';
import pet, { IPet } from '../models/pet.model';
// import jwt from 'jsonwebtoken';

export const createPet = async (req: Request, res: Response) => {

    const { owner, name, breed, size, photos, genre, collar } = req.body;

    const newPet: IPet = await pet.create({
        owner,
        name,
        breed,
        size,
        photos,
        genre,
        collar
    })

    const savedPet = await newPet.save();


    res.json({ savedPet });
}