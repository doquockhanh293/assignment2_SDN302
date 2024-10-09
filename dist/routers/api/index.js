"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const quizRouter_1 = __importDefault(require("./quizRouter"));
const questionRouter_1 = __importDefault(require("./questionRouter"));
const routes = (app) => {
    app.use('/api/questions', questionRouter_1.default);
    app.use('/api/quizzes', quizRouter_1.default);
};
exports.default = routes;
