"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const post_controller_1 = require("../controller/post.controller");
const validator_middleware_1 = require("../middlewares/validator.middleware");
const post_schema_1 = require("../schemas/post.schema");
const router = express_1.default.Router();
router.post('/send', (0, validator_middleware_1.schemaValidation)(post_schema_1.postSchema), post_controller_1.sendPost);
router.post('/test', (0, validator_middleware_1.schemaValidation)(post_schema_1.postSchema), post_controller_1.test);
router.get('/all', post_controller_1.getPosts);
exports.default = router;
