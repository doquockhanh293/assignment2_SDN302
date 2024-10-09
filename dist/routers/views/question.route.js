"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const view_question_controller_1 = require("../../controller/Views/view.question.controller");
const router = express_1.default.Router();
router.get('/', view_question_controller_1.allQuestions);
router.get('/display', view_question_controller_1.displayQuestion);
router.get('/edit', view_question_controller_1.editQuestion);
router.get('/new', view_question_controller_1.newQuestion);
exports.default = router;
