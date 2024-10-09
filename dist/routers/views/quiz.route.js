"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const view_quiz_controller_1 = require("../../controller/Views/view.quiz.controller");
const router = express_1.default.Router();
router.get('/', view_quiz_controller_1.allQuizzes);
router.get('/display', view_quiz_controller_1.displayQuiz);
router.get('/edit', view_quiz_controller_1.editQuiz);
router.get('/new', view_quiz_controller_1.newQuiz);
exports.default = router;
