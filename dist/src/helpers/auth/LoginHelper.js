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
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateUserLoginResponse = void 0;
const jwt_1 = require("../jwt");
function generateUserLoginResponse(user) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Helper enter");
        const token = (0, jwt_1.generateForUser)(user);
        console.log(token);
        // response
        const response = {
            success: true,
            statusCode: 200,
            accessToken: token,
        };
        console.log("response", response);
        return response;
    });
}
exports.generateUserLoginResponse = generateUserLoginResponse;
