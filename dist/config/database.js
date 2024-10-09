"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
// Load environment variables from .env file
dotenv_1.default.config();
// Set strictQuery outside the connectDB function
mongoose_1.default.set("strictQuery", false);
const connectDB = async () => {
    try {
        const uri = process.env['MONGODB_URI'];
        console.log("DB_URI:", process.env['MONGODB_URI']);
        if (!uri) {
            throw new Error("MONGODB_URI is not defined in the environment variables");
        }
        console.log("Attempting to connect with URI:", uri);
        const conn = await mongoose_1.default.connect(uri, {});
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    }
    catch (error) {
        // Type assertion for error
        if (error instanceof Error) {
            console.error(`Error: ${error.message}`);
        }
        else {
            console.error(`Error: ${error}`);
        }
        process.exit(1);
    }
};
exports.default = connectDB;
