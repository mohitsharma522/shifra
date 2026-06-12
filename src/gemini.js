import { GoogleGenAI } from "@google/genai";

let apikey = "AIzaSyBJ8Dvae-Or1AB-RKMjWEzTMYQFVm__EDI";

const ai = new GoogleGenAI({ apiKey: apikey });

async function main(prompt) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,

    generationConfig: {
      maxOutputTokens: 20,     // response limits
      temperature: 0.6
    }

  });

  return response.text;

}

export default main;
