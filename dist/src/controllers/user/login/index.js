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
const LoginHelper_1 = require("../../../helpers/auth/LoginHelper");
exports.default = () => (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("enter user login");
        let user;
        let user1;
        user = yield userModel_1.default.findOne({ email: req.body.email,
            isDeleted: false, });
        if (!user)
            throw new Error(default_1.ErrorMessageCode.USER_NOT_FOUND);
        if (user) {
            const isValid = yield bcryptjs_1.default.compare(req.body.password, user.password);
            console.log("isValid,", isValid);
            if (!isValid)
                throw new Error(default_1.ErrorMessageCode.INCORRECT_PASSWORD);
            user1 = {
                _id: user._id.toString(),
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName
            };
            const response = yield (0, LoginHelper_1.generateUserLoginResponse)(user1);
            console.log(response);
            default_1.logger.debug(` ${user.email} logged in.`);
            return res.status(response.statusCode).json(response);
        }
    }
    catch (err) {
        default_1.logger.error("An Error occurred during e-mail login", err);
        console.log(err);
        next(err);
    }
});
