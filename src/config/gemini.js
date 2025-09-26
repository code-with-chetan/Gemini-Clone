
//node --version # should be >=18
//npm install @google/generative-ai

import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
} from "@google/generative-ai"


const MODEL_NAME = "gemini-2.5-flash-lite";
const API_KEY="AIzaSyB6i71MqHw1JrUdph8PK8LVh_CK4fj2O64";

async function runChat(prompt){
    const genAI=new GoogleGenerativeAI(API_KEY);
    const model=genAI.getGenerativeModel({model:MODEL_NAME});

    const generationConfig={
        temperature:0.9,
        topK:1,
        topP:1,
        maxOutputTokens:2048,
    };

    const safetySettings=[
        {
            category:HarmCategory.HARM_CATEGORY_HARASSMENT,
            threshold:HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },

        {
            category:HarmCategory.HARM_CATEGORY_HATE_SPEECH,
            threshold:HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },

        {
            category:HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
            threshold:HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },

        {
            category:HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
            threshold:HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
    ];


    const chat=model.startChat({
        generationConfig,
        safetySettings,
        history: [

        ],
    });

    const result=await chat.sendMessage(prompt);
    const response=result.response;
    console.log(response.text());
    return response.text();
    
}

export default runChat;