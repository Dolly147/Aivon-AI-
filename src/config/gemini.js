import { GoogleGenerativeAI } from "@google/generative-ai";

// ✅ API KEY from .env
const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

const genAI = new GoogleGenerativeAI(apiKey);

// ✅ NEW WORKING MODEL
const model = genAI.getGenerativeModel({
  model: "gemini-3-flash-preview",
});

async function run(prompt) {
  try {
    const result = await model.generateContent(prompt);
    const response = await result.response.text();

    console.log("AI Response:", response);

    return response;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "⚠️ API Error: Check key or model access.";
  }
}

export default run;