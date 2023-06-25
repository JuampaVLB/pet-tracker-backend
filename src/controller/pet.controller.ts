import { Request, Response } from 'express';
import pet, { IPet } from '../models/pet.model';

export const getPets = async (req: Request, res: Response) => {
    try {
        const name = req.params.name;

        const searchPets = await pet.find({ owner: name });

        res.status(200).json({ searchPets });
    } catch (error) {
        res.status(400).json({ error });
    }
}

export const createPet = async (req: Request, res: Response) => {

    const { owner, name, breed, size, genre, collar } = req.body;

    const newPet: IPet = await pet.create({
        owner,
        name,
        breed,
        size,
        genre,
        collar
    })

    const savedPet = await newPet.save();


    res.json({ savedPet });
}

export const addImage = async (req: Request, res: Response) => {
    const { id, photos } = req.body;


    const searchPet = await pet.findByIdAndUpdate(id, { photos: photos }, { new: true })

    res.status(200).json({ searchPet });

}