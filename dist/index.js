"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/index.ts
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const database_1 = __importDefault(require("./config/database"));
const index_1 = __importDefault(require("./routers/api/index"));
const index_2 = __importDefault(require("./routers/views/index"));
dotenv_1.default.config(); // Load environment variables
const app = (0, express_1.default)();
const PORT = 3001;
// Middleware to parse JSON
app.use(express_1.default.json());
// CORS configuration
const corsOptions = {
    origin: '*', // Allow all origins
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
};
app.use((0, cors_1.default)(corsOptions));
// Connect to MongoDB
(0, database_1.default)();
app.set('view engine', 'ejs');
app.set('views', './src/views');
// Define routes
(0, index_2.default)(app);
(0, index_1.default)(app);
// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
