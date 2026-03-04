import OpenAI from "openai";

export function createOpenAIClient() {
  const apiKey = import.meta.env.VITE_OPENAI_API_KEY as string | undefined;

  if (!apiKey) {
    throw new Error("Missing VITE_OPENAI_API_KEY");
  }

  return new OpenAI({
    apiKey,
    dangerouslyAllowBrowser: true,
  });
}
