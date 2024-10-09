"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.editQuiz = exports.displayQuiz = exports.newQuiz = exports.allQuizzes = void 0;
const config_1 = require("../../config/config");
const axios_1 = __importDefault(require("axios"));
const allQuizzes = async (req, res) => {
    const response = await axios_1.default.get(`${config_1.server.schema}://${config_1.server.host}:${config_1.server.port}/api/quizzes`);
    const quizzes = response.data;
    res.render('quizzes/allQuizzes', { quizzes: quizzes });
};
exports.allQuizzes = allQuizzes;
const newQuiz = async (req, res) => {
    res.render('quizzes/newQuiz');
};
exports.newQuiz = newQuiz;
const displayQuiz = async (req, res) => {
    const { id } = req.query;
    const response = await axios_1.default.get(`${config_1.server.schema}://${config_1.server.host}:${config_1.server.port}/api/quizzes/${id}`);
    const quiz = response.data;
    const questionPromises = quiz.questions.map(async (questionId) => {
        const questionResponse = await axios_1.default.get(`${config_1.server.schema}://${config_1.server.host}:${config_1.server.port}/api/questions/${questionId}`);
        return questionResponse.data;
    });
    const questions = await Promise.all(questionPromises);
    res.render('quizzes/displayQuiz', { quiz: quiz, questions: questions });
};
exports.displayQuiz = displayQuiz;
const editQuiz = async (req, res) => {
    const { id } = req.query;
    const response = await axios_1.default.get(`${config_1.server.schema}://${config_1.server.host}:${config_1.server.port}/api/quizzes/${id}`);
    const quiz = response.data;
    res.render('quizzes/editQuiz', { quiz: quiz });
};
exports.editQuiz = editQuiz;
