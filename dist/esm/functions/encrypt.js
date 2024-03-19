"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function encrypt(...args) {
    let texts = args.filter((arg) => typeof arg === "string");
    const options = args.find((arg) => typeof arg === "object");
    if (options?.trim) {
        texts = texts.map((text) => text.trim());
    }
    if (options?.toLowerCase) {
        texts = texts.map((text) => text.toLowerCase());
    }
    if (options?.toUpperCase) {
        texts = texts.map((text) => text.toUpperCase());
    }
    const requests = texts.map((text) => fetch("https://supercryptjs-api-v2.binaryblazer.me/api/encrypt", {
        method: "POST",
        body: JSON.stringify({ text }),
        headers: {
            "Content-Type": "application/json",
        },
    }).then((res) => res.json()));
    const encryptedTexts = await Promise.all(requests);
    const results = encryptedTexts.map((text) => text.result);
    return options?.returnArray ? results : results.join("\n");
}
exports.default = encrypt;
