"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const pet_controller_1 = require("../controller/pet.controller");
const validator_middleware_1 = require("../middlewares/validator.middleware");
const pet_schema_1 = require("../schemas/pet.schema");
const router = express_1.default.Router();
router
    .get("/", (0, validator_middleware_1.schemaValidation)(pet_schema_1.petSchema), pet_controller_1.createPet)
    .post('/create', (0, validator_middleware_1.schemaValidation)(pet_schema_1.petSchema), pet_controller_1.createPet);
exports.default = router;
