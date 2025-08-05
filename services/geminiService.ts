import { GoogleGenAI, GenerateContentResponse, Type } from "@google/genai";
import { Job } from '../types';

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  throw new Error("API_KEY environment variable not set.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

export const generateContactResponse = async (name: string, message: string, language: 'en' | 'de'): Promise<string> => {
    try {
        const prompt = language === 'de'
            ? `Der Name des Benutzers ist ${name} und seine Nachricht lautet: "${message}". Bestätigen Sie den Erhalt der Nachricht herzlich und professionell. Versichern Sie, dass ein Spezialist von Dogan Recruiting die Anfrage prüfen und sich innerhalb von 24 Geschäftsstunden melden wird. Halten Sie es kurz und freundlich.`
            : `The user's name is ${name} and their message is: "${message}". Acknowledge their message warmly and professionally. Assure them that a specialist from Dogan Recruiting will review their inquiry and contact them within 24 business hours. Keep it concise and friendly.`;
        
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
             config: {
                thinkingConfig: { thinkingBudget: 0 }
            }
        });
        return response.text;
    } catch (error) {
        console.error("Error generating contact response:", error);
        return language === 'de'
            ? "Vielen Dank für Ihre Nachricht. Wir haben sie erhalten und werden uns in Kürze bei Ihnen melden."
            : "Thank you for your message. We have received it and will get back to you shortly.";
    }
};

export const generateJobPostings = async (language: 'en' | 'de'): Promise<Job[]> => {
    const jobSchema = {
        type: Type.OBJECT,
        properties: {
            jobTitle: { type: Type.STRING, description: 'The title of the job.' },
            location: { type: Type.STRING, description: 'The location of the job, e.g., "Berlin, Germany".' },
            jobType: { type: Type.STRING, description: 'The type of employment, e.g., "Full-time", "Part-time".' },
            specialty: { type: Type.STRING, description: 'The medical specialty for the job.' },
            description: { type: Type.STRING, description: 'A brief, one-sentence description of the job.' },
        },
        required: ['jobTitle', 'location', 'jobType', 'specialty', 'description']
    };

    const prompt = language === 'de'
        ? `Erstelle eine Liste mit 6 fiktiven, aber realistischen Stellenangeboten für medizinisches Fachpersonal in Deutschland. Die Standorte sollten deutsche Städte sein. Die Beschreibungen sollten kurz und prägnant sein (ein Satz).`
        : `Generate a list of 6 fictional but realistic job postings for medical professionals in Germany. The locations should be German cities. Descriptions should be short and concise (one sentence).`;

    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                responseSchema: {
                    type: Type.ARRAY,
                    items: jobSchema,
                },
            },
        });
        
        const jsonText = response.text.trim();
        if (!jsonText) {
            return [];
        }
        const jobs: Job[] = JSON.parse(jsonText);
        return jobs;
    } catch (error) {
        console.error("Error generating job postings:", error);
        return [];
    }
};
