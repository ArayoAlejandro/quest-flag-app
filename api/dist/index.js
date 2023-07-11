"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongo_1 = require("./mongo");
const Score_1 = require("./models/Score");
const cors_1 = __importDefault(require("cors"));
(0, mongo_1.connectToDatabase)();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get('/api/score', (_req, res) => {
    Score_1.Score.find()
        .then(score => res.json(score))
        .catch(error => { console.error(error); });
});
app.post('/api/score', (req, res) => {
    const score = req.body;
    const newScore = new Score_1.Score({
        name: score.name,
        score: score.score
    });
    newScore
        .save()
        .then(saveScore => res.json(saveScore))
        .catch(error => { console.error(error); });
});
app.use((_req, res) => {
    res.status(404).end();
});
app.listen(3000, () => {
    console.log('Server is listening ');
});
//# sourceMappingURL=index.js.map