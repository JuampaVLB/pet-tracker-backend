"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
var Size;
(function (Size) {
    Size["small"] = "small";
    Size["medium"] = "medium";
    Size["big"] = "big";
    Size["verybig"] = "verybig";
})(Size || (Size = {}));
var Genre;
(function (Genre) {
    Genre["male"] = "femenino";
    Genre["female"] = "masculino";
})(Genre || (Genre = {}));
const petSchema = new mongoose_1.Schema({
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
}, {
    timestamps: true,
    versionKey: false,
});
exports.default = (0, mongoose_1.model)('Pets', petSchema);
