async function decrypt({ encryption }: { encryption: string }) {
  const decryptedText = await fetch(
    "https://supercryptjs-api-v2.binaryblazer.me/api/decrypt",
    {
      method: "POST",
      body: JSON.stringify({ encryption }),
      headers: {
        "Content-Type": "application/json",
      },
    },
  ).then((res) => res.json());

  return decryptedText.result;
}

export default decrypt;
