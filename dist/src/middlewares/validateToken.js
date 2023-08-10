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
const default_1 = require("../utils/default");
const models_1 = __importDefault(require("../models"));
const mongoose_1 = require("mongoose");
const jwt_1 = require("../helpers/jwt");
exports.default = () => (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const accessToken = req.headers.authorization;
        if (accessToken) {
            try {
                let loggedInUser;
                console.log("enter user authenticator");
                const decoded = yield (0, jwt_1.verifyAsyncUser)(accessToken);
                req.user = decoded;
                console.log("decoded", decoded);
                if (decoded.type === "access-token") {
                    loggedInUser = yield models_1.default.Users
                        .findOne({
                        _id: new mongoose_1.Types.ObjectId(decoded._id),
                    })
                        .lean()
                        .exec();
                }
            }
            catch (err) {
                throw new Error(default_1.ErrorMessageCode.INVALID_TOKEN);
            }
        }
        next();
    }
    catch (error) {
        default_1.logger.error(`Unable to authorize token`, error);
        next(error);
    }
});
