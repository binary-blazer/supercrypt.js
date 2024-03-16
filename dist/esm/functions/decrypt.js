"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function decrypt({ encryption }) {
    const decryptedText = await fetch("https://supercryptjs-api-v2.binaryblazer.me/api/decrypt", {
        method: "POST",
        body: JSON.stringify({ encryption }),
        headers: {
            "Content-Type": "application/json",
        },
    });
    return decryptedText;
}
exports.default = decrypt;
