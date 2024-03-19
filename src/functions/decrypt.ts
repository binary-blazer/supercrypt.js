interface DecryptOptions {
  returnArray?: boolean;
  trim?: boolean;
  toLowerCase?: boolean;
  toUpperCase?: boolean;
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
  let results = decryptedTexts.map((text) => text.result);

  if (options?.trim) {
    results = results.map((result) => result.trim());
  }

  if (options?.toLowerCase) {
    results = results.map((result) => result.toLowerCase());
  }

  if (options?.toUpperCase) {
    results = results.map((result) => result.toUpperCase());
  }

  return options?.returnArray ? results : results.join("\n");
}

export default decrypt;
