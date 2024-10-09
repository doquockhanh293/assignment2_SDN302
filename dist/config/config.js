"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = exports.DATABASE_URL = exports.SERVER_ORIGIN = exports.SERVER_PORT = exports.SERVER_HOST = exports.SCHEMA = exports.DEVELOPMENT = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.DEVELOPMENT = process.env['APP_ENV'] == 'development';
exports.SCHEMA = process.env['SCHEMA'] || 'http';
exports.SERVER_HOST = process.env['SERVER_HOST'] || 'localhost';
exports.SERVER_PORT = parseInt(process.env['SERVER_PORT'] || '3001');
exports.SERVER_ORIGIN = exports.DEVELOPMENT
    ? '*'
    : process.env['ORIGIN'];
exports.DATABASE_URL = process.env['DATABASE_URL'] || 'mongodb://localhost:27017';
exports.server = {
    schema: exports.SCHEMA,
    host: exports.SERVER_HOST,
    port: exports.SERVER_PORT,
    origin: exports.SERVER_ORIGIN,
    databaseUrl: exports.DATABASE_URL,
};
