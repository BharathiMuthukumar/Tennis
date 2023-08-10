"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Router = express_1.default.Router();
const middlewares_1 = require("../middlewares");
const register_1 = __importDefault(require("../controllers/user/register"));
const login_1 = __importDefault(require("../controllers/user/login"));
const get_1 = __importDefault(require("../controllers/user/get"));
const put_1 = __importDefault(require("../controllers/user/put"));
const delete_1 = __importDefault(require("../controllers/user/delete"));
Router.get('/getUser', (0, middlewares_1.validationAuthenticator)(), (0, get_1.default)());
Router.post('/userRegister', (0, register_1.default)());
Router.post('/userLogin', (0, login_1.default)());
Router.put('/updateUser/:_id', (0, put_1.default)());
Router.delete('/deleteUser/:_id', (0, delete_1.default)());
exports.default = Router;
