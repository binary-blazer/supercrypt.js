"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const decrypt_1 = __importDefault(require("./functions/decrypt"));
const encrypt_1 = __importDefault(require("./functions/encrypt"));
const SuperCryptJS = {
    Decrypt: decrypt_1.default,
    Encrypt: encrypt_1.default,
};
exports.default = SuperCryptJS;
