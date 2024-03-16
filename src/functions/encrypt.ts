async function Encrypt({ text }: { text: string }) {
  const encryptedText = await fetch(
    "https://supercryptjs-api-v2.binaryblazer.me/api/encrypt",
    {
      method: "POST",
      body: JSON.stringify({ text }),
      headers: {
        "Content-Type": "application/json",
      },
    },
  );

  return encryptedText;
}

export default Encrypt;
