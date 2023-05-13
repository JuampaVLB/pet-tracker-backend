"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const roleSchema = new mongoose_1.Schema({
    name: String,
}, {
    versionKey: false,
});
exports.default = (0, mongoose_1.model)("Role", roleSchema);
