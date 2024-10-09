"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const quiz_route_1 = __importDefault(require("./quiz.route"));
const question_route_1 = __importDefault(require("./question.route"));
const routes = (app) => {
    app.use('/questions', question_route_1.default);
    app.use('/quizzes', quiz_route_1.default);
};
exports.default = routes;
