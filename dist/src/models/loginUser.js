"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const loginSchema = new mongoose_1.Schema({
    accountID: {
        require: true,
        type: String
    },
    password: {
        require: true,
        type: String,
    }
});
exports.default = (0, mongoose_1.model)('loginInfo', loginSchema);
