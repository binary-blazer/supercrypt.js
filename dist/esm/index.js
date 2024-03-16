"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.decrypt = exports.encrypt = void 0;
const encrypt_1 = __importDefault(require("./functions/encrypt"));
exports.encrypt = encrypt_1.default;
const decrypt_1 = __importDefault(require("./functions/decrypt"));
exports.decrypt = decrypt_1.default;
