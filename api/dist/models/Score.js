"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScoreAfrica = exports.ScoreAsia = exports.ScoreOceania = exports.ScoreAmerica = exports.ScoreEurope = exports.ScoreAll = void 0;
const mongoose_1 = require("mongoose");
const scoreSchema = new mongoose_1.Schema({
    name: String,
    score: Number
});
scoreSchema.set('toJSON', {
    transform: (_document, returnedObject) => {
        returnedObject.id = returnedObject._id;
        delete returnedObject._id;
        delete returnedObject.__v;
    }
});
exports.ScoreAll = (0, mongoose_1.model)('ScoreAll', scoreSchema);
exports.ScoreEurope = (0, mongoose_1.model)('ScoreEurope', scoreSchema);
exports.ScoreAmerica = (0, mongoose_1.model)('ScoreAmerica', scoreSchema);
exports.ScoreOceania = (0, mongoose_1.model)('ScoreOcenia', scoreSchema);
exports.ScoreAsia = (0, mongoose_1.model)('ScoreAsia', scoreSchema);
exports.ScoreAfrica = (0, mongoose_1.model)('ScoreAfrica', scoreSchema);
//# sourceMappingURL=Score.js.map