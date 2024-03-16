"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var decrypt_1 = require("./functions/decrypt");
var encrypt_1 = require("./functions/encrypt");
var SuperCryptJS = {
    Decrypt: decrypt_1.default,
    Encrypt: encrypt_1.default,
};
exports.default = SuperCryptJS;
