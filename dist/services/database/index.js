"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handlers = void 0;
const FilesystemDatabaseHandler_1 = __importDefault(require("./FilesystemDatabaseHandler"));
exports.handlers = {
    filesystem: FilesystemDatabaseHandler_1.default,
};
