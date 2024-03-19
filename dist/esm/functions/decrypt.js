"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function decrypt(...encryptions) {
    const requests = encryptions.map((encryption) => fetch("https://supercryptjs-api-v2.binaryblazer.me/api/decrypt", {
        method: "POST",
        body: JSON.stringify({ encryption }),
        headers: {
            "Content-Type": "application/json",
        },
    }).then((res) => res.json()));
    const decryptedTexts = await Promise.all(requests);
    const results = decryptedTexts.map((text) => text.result);
    return results.join("\n");
}
exports.default = decrypt;
