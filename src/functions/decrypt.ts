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

  const _result = await decryptedText.result;
  return _result;
}

export default decrypt;
