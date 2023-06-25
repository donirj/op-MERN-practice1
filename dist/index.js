"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// sustituto de index.js
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
// config dotenv file
dotenv_1.default.config();
// create express app
const app = (0, express_1.default)();
const port = process.env.PORT || 8000;
/**
 *
 */
// define the first route of the app
app.get('/', (req, res) => {
    // send hello world
    res.send('Welcome to API RESFTUL + APP exp + Jest + TS + swagger + mongoose');
});
// define the first route of the app
app.get('/hello', (req, res) => {
    // send hello world
    res.send('Welcome to hello mf');
});
// execute app and listen 
app.listen(port, () => {
    console.log(`express srv: running at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map