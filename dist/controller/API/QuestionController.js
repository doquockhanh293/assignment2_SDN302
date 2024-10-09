"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteQuestion = exports.updateQuestion = exports.createQuestion = exports.getQuestionById = exports.getAllQuestions = void 0;
const Question_1 = require("../../models/Question");
const getAllQuestions = async (req, res) => {
    try {
        const questions = await Question_1.Question.find().select('-__v');
        return res.status(200).json(questions);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ error: error.message });
    }
};
exports.getAllQuestions = getAllQuestions;
//------------------------------------------------------------
const getQuestionById = async (req, res) => {
    try {
        const { questionId } = req.params;
        const question = await Question_1.Question.findById(questionId).select('-__v');
        if (!question) {
            return res.status(404).json({ message: 'Question not found' });
        }
        return res.status(200).json(question);
    }
    catch (error) {
        return res.status(500).json({ error: error.message });
    }
};
exports.getQuestionById = getQuestionById;
//------------------------------------------------------------
const createQuestion = async (req, res) => {
    try {
        const question = new Question_1.Question(req.body);
        const newQuestion = await question.save();
        return res.status(201).json(newQuestion);
    }
    catch (error) {
        return res.status(500).json({ error: error.message });
    }
};
exports.createQuestion = createQuestion;
//------------------------------------------------------------
const updateQuestion = async (req, res) => {
    try {
        const { questionId } = req.params;
        const updatedQuestion = await Question_1.Question.findByIdAndUpdate(questionId, req.body, { new: true }).select('-__v');
        if (!updatedQuestion) {
            return res.status(404).json({ message: 'Question not found' });
        }
        return res.status(200).json(updatedQuestion);
    }
    catch (error) {
        return res.status(500).json({ error: error.message });
    }
};
exports.updateQuestion = updateQuestion;
//------------------------------------------------------------
const deleteQuestion = async (req, res) => {
    try {
        const { questionId } = req.params;
        const deletedQuestion = await Question_1.Question.findByIdAndDelete(questionId).select('-__v');
        if (!deletedQuestion) {
            return res.status(404).json({ message: 'Question not found' });
        }
        return res.status(200).json(deletedQuestion);
    }
    catch (error) {
        return res.status(500).json({ error: error.message });
    }
};
exports.deleteQuestion = deleteQuestion;
