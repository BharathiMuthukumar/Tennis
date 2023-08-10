"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const user_1 = __importDefault(require("./src/routes/user"));
app.use(express_1.default.json());
mongoose_1.default.connect(process.env.URI)
    .then(() => {
    console.log("DATABASE CONNECTED SUCCESSFULLY");
});
app.use("/user", user_1.default);
app.listen(process.env.PORT || 3000, () => {
    console.log('Server listening on port 3000');
});
