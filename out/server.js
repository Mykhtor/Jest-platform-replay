"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const music_routes_1 = __importDefault(require("./routes/music.routes"));
// express config
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/music', music_routes_1.default);
// Routes
app.listen(8080, () => console.log("Server is running on http://localhost:8080"));
function musicroutes(arg0, musicroutes) {
    throw new Error('Function not implemented.');
}
