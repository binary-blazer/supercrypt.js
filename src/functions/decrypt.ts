async function Decrypt({ encryption }: { encryption: string }) {
  const decryptedText = await fetch(
    "https://supercryptjs-api-v2.binaryblazer.me/api/decrypt",
    {
      method: "POST",
      body: JSON.stringify({ encryption }),
      headers: {
        "Content-Type": "application/json",
      },
    },
  );

  return decryptedText;
}

export default Decrypt;
