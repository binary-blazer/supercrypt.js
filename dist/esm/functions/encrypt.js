"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function encrypt(...texts) {
    const requests = texts.map((text) => fetch("https://supercryptjs-api-v2.binaryblazer.me/api/encrypt", {
        method: "POST",
        body: JSON.stringify({ text }),
        headers: {
            "Content-Type": "application/json",
        },
    }).then((res) => res.json()));
    const encryptedTexts = await Promise.all(requests);
    const results = encryptedTexts.map((text) => text.result);
    return results;
}
exports.default = encrypt;
