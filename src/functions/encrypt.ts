interface EncryptOptions {
  returnArray?: boolean;
}

async function encrypt(...args: (string | EncryptOptions)[]) {
  const texts = args.filter((arg) => typeof arg === "string") as string[];
  const options = args.find((arg) => typeof arg === "object") as
    | EncryptOptions
    | undefined;

  const requests = texts.map((text) =>
    fetch("https://supercryptjs-api-v2.binaryblazer.me/api/encrypt", {
      method: "POST",
      body: JSON.stringify({ text }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json()),
  );

  const encryptedTexts = await Promise.all(requests);
  const results = encryptedTexts; // encryptedTexts.map((text) => text.result);

  return options?.returnArray ? results : results.join("\n");
}

export default encrypt;
