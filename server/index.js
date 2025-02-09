const express = require('express');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors({
    origin: 'http://localhost:3000', // Allow React app to connect
    methods: ['GET', 'POST']
  }));
app.use(express.json());

// Initialize Gemini
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// API endpoint for chatbot
app.post('/api/chat', async (req, res) => {
  const { message } = req.body;

  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
    const prompt = `Act as an AI Tutor for students. Answer this in detail: ${message}`;
    
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    res.json({ reply: text });
  } catch (error) {
    res.status(500).json({ error: 'Failed to generate response' });
  }
}); 

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
