"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.static('../client/dist'));
app.get('/ping', (_req, res) => {
    return res.send('pong 🏓');
});
app.listen(3000, () => {
    console.log('Server is listening ');
});
//# sourceMappingURL=index.js.map