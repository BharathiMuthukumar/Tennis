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
const userModel_1 = __importDefault(require("../../../models/userModel"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const default_1 = require("../../../utils/default");
exports.default = () => (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("enter user register");
        req.body.email = req.body.email.toLowerCase();
        const existinguser = yield userModel_1.default.findOne({ email: req.body.email });
        if (existinguser) {
            throw new Error(default_1.ErrorMessageCode.USER_ALREADY_EXISTS);
        }
        req.body.password = yield bcryptjs_1.default.hash(req.body.password, parseInt(process.env.BCRYPT_SALT_ROUNDS));
        const newuser = new userModel_1.default(Object.assign({}, req.body));
        const saveduser = yield newuser.save();
        default_1.logger.debug(`user ${saveduser.email} created. ID: ${saveduser._id}`);
        const resp = {
            success: true,
            statusCode: 201,
            successMessage: "user registered successfully",
        };
        return res.status(201).json(resp);
    }
    catch (error) {
        console.log(error);
        default_1.logger.error("Error while registering user.", error);
        return next(error);
    }
});
