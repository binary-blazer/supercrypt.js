"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function Encrypt({ text }) {
    const encryptedText = await fetch("https://supercryptjs-api-v2.binaryblazer.me/api/encrypt", {
        method: "POST",
        body: JSON.stringify({ text }),
        headers: {
            "Content-Type": "application/json",
        },
    });
    return encryptedText;
}
exports.default = Encrypt;
