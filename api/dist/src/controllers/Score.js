"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Score_1 = require("../models/Score");
const router = (0, express_1.Router)();
router.get('/all', async (_req, res) => {
    await Score_1.ScoreAll.find()
        .then(score => res.json(score))
        .catch(error => { console.error(error); });
});
router.post('/all', async (req, res) => {
    const score = req.body;
    const newScore = new Score_1.ScoreAll({
        name: score.name,
        score: score.score
    });
    await newScore
        .save()
        .then(saveScore => res.json(saveScore))
        .catch(error => { console.error(error); });
});
router.get('/europe', async (_req, res) => {
    await Score_1.ScoreEurope.find()
        .then(score => res.json(score))
        .catch(error => { console.error(error); });
});
router.post('/europe', async (req, res) => {
    const score = req.body;
    const newScore = new Score_1.ScoreEurope({
        name: score.name,
        score: score.score
    });
    await newScore
        .save()
        .then(saveScore => res.json(saveScore))
        .catch(error => { console.error(error); });
});
router.get('/africa', async (_req, res) => {
    await Score_1.ScoreAfrica.find()
        .then(score => res.json(score))
        .catch(error => { console.error(error); });
});
router.post('/africa', async (req, res) => {
    const score = req.body;
    const newScore = new Score_1.ScoreAfrica({
        name: score.name,
        score: score.score
    });
    await newScore
        .save()
        .then(saveScore => res.json(saveScore))
        .catch(error => { console.error(error); });
});
router.get('/oceania', async (_req, res) => {
    await Score_1.ScoreOceania.find()
        .then(score => res.json(score))
        .catch(error => { console.error(error); });
});
router.post('/oceania', async (req, res) => {
    const score = req.body;
    const newScore = new Score_1.ScoreOceania({
        name: score.name,
        score: score.score
    });
    await newScore
        .save()
        .then(saveScore => res.json(saveScore))
        .catch(error => { console.error(error); });
});
router.get('/america', async (_req, res) => {
    await Score_1.ScoreAmerica.find()
        .then(score => res.json(score))
        .catch(error => { console.error(error); });
});
router.post('/america', async (req, res) => {
    const score = req.body;
    const newScore = new Score_1.ScoreAmerica({
        name: score.name,
        score: score.score
    });
    await newScore
        .save()
        .then(saveScore => res.json(saveScore))
        .catch(error => { console.error(error); });
});
router.get('/asia', async (_req, res) => {
    await Score_1.ScoreAsia.find()
        .then(score => res.json(score))
        .catch(error => { console.error(error); });
});
router.post('/asia', async (req, res) => {
    const score = req.body;
    const newScore = new Score_1.ScoreAsia({
        name: score.name,
        score: score.score
    });
    await newScore
        .save()
        .then(saveScore => res.json(saveScore))
        .catch(error => { console.error(error); });
});
exports.default = router;
//# sourceMappingURL=Score.js.map