"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongo_1 = require("./mongo");
const Score_1 = __importDefault(require("./controllers/Score"));
const cors_1 = __importDefault(require("cors"));
(0, mongo_1.connectToDatabase)();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get('/api/ping', (_req, res) => {
    res.json({ hola: 'hola' });
});
app.use('/api/score', Score_1.default);
app.use((_req, res) => {
    res.json({ error: 'error endpoint' }).status(404).end();
});
app.listen(3000, () => {
    console.log('Server is listening ');
});
//# sourceMappingURL=index.js.map