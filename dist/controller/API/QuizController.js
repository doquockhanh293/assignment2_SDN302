"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createManyQuestionsForQuiz = exports.createOneQuestionForQuiz = exports.getCapitalQuestions = exports.deleteQuiz = exports.updateQuiz = exports.createQuiz = exports.getQuizById = exports.getAllQuizzes = void 0;
const Question_1 = require("../../models/Question");
const Quiz_1 = require("../../models/Quiz");
const getAllQuizzes = async (req, res) => {
    try {
        const quizzes = await Quiz_1.Quiz.find().select('-__v');
        return res.status(200).json(quizzes);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ error: error.message });
    }
};
exports.getAllQuizzes = getAllQuizzes;
//------------------------------------------------------------
const getQuizById = async (req, res) => {
    try {
        const { quizId } = req.params;
        const quiz = await Quiz_1.Quiz.findById(quizId).select('-__v');
        return res.status(200).json(quiz);
    }
    catch (error) {
        return res.status(500).json({ error: error.message });
    }
};
exports.getQuizById = getQuizById;
//------------------------------------------------------------
const createQuiz = async (req, res) => {
    try {
        const quiz = new Quiz_1.Quiz(req.body);
        const newQuiz = await quiz.save();
        return res.status(201).json(newQuiz);
    }
    catch (error) {
        return res.status(500).json({ error: error.message });
    }
};
exports.createQuiz = createQuiz;
//------------------------------------------------------------
const updateQuiz = async (req, res) => {
    try {
        const { quizId } = req.params;
        const updatedQuiz = await Quiz_1.Quiz.findByIdAndUpdate(quizId, req.body, {
            new: true,
        }).select('-__v');
        if (!updatedQuiz) {
            return res.status(404).json({ message: 'Quiz not found' });
        }
        return res.status(200).json(updatedQuiz);
    }
    catch (error) {
        return res.status(500).json({ error: error.message });
    }
};
exports.updateQuiz = updateQuiz;
//------------------------------------------------------------
const deleteQuiz = async (req, res) => {
    try {
        const { quizId } = req.params;
        const deletedQuiz = await Quiz_1.Quiz.findByIdAndDelete(quizId).select('-__v');
        if (!deletedQuiz) {
            return res.status(404).json({ message: 'Quiz not found' });
        }
        return res.status(200).json(deletedQuiz);
    }
    catch (error) {
        return res.status(500).json({ error: error.message });
    }
};
exports.deleteQuiz = deleteQuiz;
//------------------------------------------------------------
const getCapitalQuestions = async (req, res) => {
    try {
        const { quizId } = req.params;
        const quiz = await Quiz_1.Quiz.findById(quizId)
            .populate({
            path: 'questions',
            select: '-__v',
            match: {
                keywords: { $in: ['capital'] },
            },
        })
            .select('-__v')
            .exec();
        if (!quiz || !quiz.questions || quiz.questions.length === 0) {
            return res.status(404).json({ message: 'No questions found with keyword capital' });
        }
        return res.status(200).json(quiz);
    }
    catch (error) {
        return res.status(500).json({ error: error.message });
    }
};
exports.getCapitalQuestions = getCapitalQuestions;
//------------------------------------------------------------
const createOneQuestionForQuiz = async (req, res) => {
    try {
        const { quizId } = req.params;
        const quiz = await Quiz_1.Quiz.findById(quizId);
        if (!quiz) {
            return res.status(404).json({ message: 'Quiz not found' });
        }
        const question = new Question_1.Question(req.body);
        const newQuestion = await question.save();
        quiz.questions.push(newQuestion._id);
        await quiz.save();
        return res.status(201).json(newQuestion);
    }
    catch (error) {
        return res.status(500).json({ error: error.message });
    }
};
exports.createOneQuestionForQuiz = createOneQuestionForQuiz;
//------------------------------------------------------------
const createManyQuestionsForQuiz = async (req, res) => {
    try {
        const { quizId } = req.params;
        const quiz = await Quiz_1.Quiz.findById(quizId);
        if (!quiz) {
            return res.status(404).json({ message: 'Quiz not found' });
        }
        const questions = req.body.map((question) => new Question_1.Question(question));
        const newQuestions = await Question_1.Question.insertMany(questions);
        quiz.questions.push(...newQuestions.map((question) => question._id));
        await quiz.save();
        return res.status(201).json(newQuestions);
    }
    catch (error) {
        return res.status(500).json({ error: error.message });
    }
};
exports.createManyQuestionsForQuiz = createManyQuestionsForQuiz;
exports.default = {
    getAllQuizzes: exports.getAllQuizzes,
    createManyQuestionsForQuiz: exports.createManyQuestionsForQuiz,
    getQuizById: exports.getQuizById,
    createQuiz: exports.createQuiz,
    updateQuiz: exports.updateQuiz,
    deleteQuiz: exports.deleteQuiz,
    getCapitalQuestions: exports.getCapitalQuestions,
    createOneQuestionForQuiz: exports.createOneQuestionForQuiz
};
