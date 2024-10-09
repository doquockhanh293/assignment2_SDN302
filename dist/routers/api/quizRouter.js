"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const QuizController_1 = require("../../controller/API/QuizController");
const router = express_1.default.Router();
router.get('/', QuizController_1.getAllQuizzes);
router.get('/:quizId', QuizController_1.getQuizById);
router.post('/', QuizController_1.createQuiz);
router.put('/:quizId', QuizController_1.updateQuiz);
router.delete('/:quizId', QuizController_1.deleteQuiz);
router.get('/:quizId/populate', QuizController_1.getCapitalQuestions);
router.post('/:quizId/question', QuizController_1.createOneQuestionForQuiz);
router.post('/:quizId/questions', QuizController_1.createManyQuestionsForQuiz);
exports.default = router;
