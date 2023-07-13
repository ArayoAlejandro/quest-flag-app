"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToDatabase = void 0;
const mongoose_1 = require("mongoose");
function connectToDatabase() {
    (0, mongoose_1.connect)('mongodb+srv://flag:lFOUWlbhxv00Ub2M@cluster0.v79maj7.mongodb.net/app?retryWrites=true&w=majority');
}
exports.connectToDatabase = connectToDatabase;
//# sourceMappingURL=mongo.js.map