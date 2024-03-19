interface DecryptOptions {
  returnArray?: boolean;
}

async function decrypt(...args: (string | DecryptOptions)[]) {
  const encryptions = args.filter((arg) => typeof arg === "string") as string[];
  const options = args.find((arg) => typeof arg === "object") as
    | DecryptOptions
    | undefined;

  const requests = encryptions.map((encryption) =>
    fetch("https://supercryptjs-api-v2.binaryblazer.me/api/decrypt", {
      method: "POST",
      body: JSON.stringify({ encryption }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json()),
  );

  const decryptedTexts = await Promise.all(requests);
  const results = decryptedTexts.map((text) => text.result);

  return options?.returnArray ? results : results.join("\n");
}

export default decrypt;
