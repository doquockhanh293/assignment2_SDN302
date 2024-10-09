"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.editQuestion = exports.displayQuestion = exports.newQuestion = exports.allQuestions = void 0;
const axios_1 = __importDefault(require("axios"));
const config_1 = require("../../config/config");
const allQuestions = async (req, res) => {
    const response = await axios_1.default.get(`${config_1.server.schema}://${config_1.server.host}:${config_1.server.port}/api/questions`);
    const questions = response.data;
    res.render('questions/allQuestions', { questions: questions });
};
exports.allQuestions = allQuestions;
const newQuestion = async (req, res) => {
    res.render('questions/newQuestion');
};
exports.newQuestion = newQuestion;
const displayQuestion = async (req, res) => {
    const { id } = req.query;
    const response = await axios_1.default.get(`${config_1.server.schema}://${config_1.server.host}:${config_1.server.port}/api/questions/${id}`);
    const question = response.data;
    res.render('questions/displayQuestion', { question: question });
};
exports.displayQuestion = displayQuestion;
const editQuestion = async (req, res) => {
    const { id } = req.query;
    const response = await axios_1.default.get(`${config_1.server.schema}://${config_1.server.host}:${config_1.server.port}/api/questions/${id}`);
    const question = response.data;
    res.render('questions/editQuestion', { question: question });
};
exports.editQuestion = editQuestion;
