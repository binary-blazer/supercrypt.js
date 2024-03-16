async function encrypt({ text }: { text: string }) {
  const encryptedText = await fetch(
    "https://supercryptjs-api-v2.binaryblazer.me/api/encrypt",
    {
      method: "POST",
      body: JSON.stringify({ text }),
      headers: {
        "Content-Type": "application/json",
      },
    },
  ).then((res) => res.json());

  const result = encryptedText.result;
  return result;
}

export default encrypt;
