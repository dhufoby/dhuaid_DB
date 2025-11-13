
import { GoogleGenAI, Type } from "@google/genai";
import { FAQ } from '../types';

export const generateFaqs = async (): Promise<FAQ[]> => {
  try {
    if (!process.env.API_KEY) {
      throw new Error("API_KEY environment variable not set");
    }
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: "Generate a list of 10 frequently asked questions and their answers for a university's AI and Digital (AID) online certification program that offers digital badges. The tone should be helpful and professional.",
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            faqs: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  question: {
                    type: Type.STRING,
                    description: "The frequently asked question."
                  },
                  answer: {
                    type: Type.STRING,
                    description: "The answer to the question."
                  }
                },
                required: ["question", "answer"]
              }
            }
          }
        }
      }
    });

    const jsonString = response.text;
    const parsed = JSON.parse(jsonString);
    
    if (parsed && Array.isArray(parsed.faqs)) {
      return parsed.faqs;
    } else {
      console.error("Unexpected JSON structure:", parsed);
      return [];
    }

  } catch (error) {
    console.error("Error generating FAQs with Gemini API:", error);
    throw new Error("Failed to generate FAQs. Please check your API key and try again.");
  }
};
