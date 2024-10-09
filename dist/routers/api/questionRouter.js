"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const QuestionController_1 = require("../../controller/API/QuestionController");
const router = express_1.default.Router();
router.get('/', QuestionController_1.getAllQuestions);
router.get('/:questionId', QuestionController_1.getQuestionById);
router.post('/', QuestionController_1.createQuestion);
router.put('/:questionId', QuestionController_1.updateQuestion);
router.delete('/:questionId', QuestionController_1.deleteQuestion);
exports.default = router;
