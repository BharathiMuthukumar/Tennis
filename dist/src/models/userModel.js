"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    accountID: {
        require: true,
        type: String
    },
    password: {
        require: true,
        type: String,
    },
    confirmPassword: {
        require: true,
        type: String
    },
    isDeleted: {
        require: true,
        type: Boolean
    }
});
exports.default = (0, mongoose_1.model)('UserInfo', userSchema);
