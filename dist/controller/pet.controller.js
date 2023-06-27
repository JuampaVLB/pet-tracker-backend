"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addImage = exports.createPet = exports.getPets = exports.getPet = void 0;
const pet_model_1 = __importDefault(require("../models/pet.model"));
const getPet = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const name = req.params.name;
        const searchPets = yield pet_model_1.default.find({ owner: name });
        res.status(200).json({ searchPets });
    }
    catch (error) {
        res.status(400).json({ error });
    }
});
exports.getPet = getPet;
const getPets = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const searchPets = yield pet_model_1.default.find({});
        res.status(200).json({ searchPets });
    }
    catch (error) {
        res.status(400).json({ error });
    }
});
exports.getPets = getPets;
const createPet = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { owner, name, breed, size, genre, collar } = req.body;
    const newPet = yield pet_model_1.default.create({
        owner,
        name,
        breed,
        size,
        genre,
        collar
    });
    const savedPet = yield newPet.save();
    res.json({ savedPet });
});
exports.createPet = createPet;
const addImage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, photos } = req.body;
    const searchPet = yield pet_model_1.default.findByIdAndUpdate(id, { photos: photos }, { new: true });
    res.status(200).json({ searchPet });
});
exports.addImage = addImage;
