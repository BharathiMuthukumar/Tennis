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
const default_1 = require("../../../utils/default");
exports.default = () => (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield userModel_1.default.findOneAndUpdate({
            _id: req.params._id,
        }, {
            $set: {
                isDeleted: true,
            },
        }, { new: true });
        if (!user)
            throw Error(default_1.ErrorMessageCode.USER_NOT_FOUND);
        const resp = {
            success: true,
            statusCode: 200,
            successMessage: "user Account  Deleted Successfully",
        };
        res.status(200).json(resp);
    }
    catch (err) {
        next(err);
        default_1.logger.error("Error while deleting user account.", err);
    }
});
