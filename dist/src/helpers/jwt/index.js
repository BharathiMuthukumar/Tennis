"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyAsyncUser = exports.generateForUser = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const secret = process.env.JWT_SECRET;
const timeout = process.env.JWT_TIMEOUT;
const generateForUser = (user) => {
    let token;
    console.log("TData", user);
    console.log("process env enter", process.env.JWT_SECRET);
    token = jsonwebtoken_1.default.sign({ user }, process.env.JWT_SECRET, // Use the correct secret key from environment variables
    {
        expiresIn: timeout, // Make sure 'timeout' is defined with the desired expiration time
    });
    console.log("user", user);
    console.log("token", token);
    return token;
};
exports.generateForUser = generateForUser;
const verifyAsyncUser = (token) => new Promise((res, rej) => {
    console.log("enter verify async user", token);
    const validate = jsonwebtoken_1.default.verify(token, secret, (err, decoded) => {
        if (err) {
            console.log("err", err);
            rej(err);
        }
        else {
            console.log("decoded.data", decoded.user);
            res(decoded.user);
        }
    });
    console.log("validate", validate);
    return validate;
});
exports.verifyAsyncUser = verifyAsyncUser;
