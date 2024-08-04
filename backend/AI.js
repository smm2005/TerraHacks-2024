const { HfInference } = require("@huggingface/inference");
const dotenv = require("dotenv");

dotenv.config();

const HF_ACCESS_TOKEN = "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";

const hf = new HfInference(HF_ACCESS_TOKEN);

async function generateText(stringForAI) {
  let out = "";
  for await (const chunk of hf.chatCompletionStream({
    model: "mistralai/Mistral-7B-Instruct-v0.2",
    messages: [
      { role: "user", content: stringForAI },
    ],
    max_tokens: 500,
    temperature: 0.1,
    seed: 0,
  })) {
    if (chunk.choices && chunk.choices.length > 0) {
      out += chunk.choices[0].delta.content;
    }
  }
  return out;
}