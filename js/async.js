async function getAIResponse(userMsg) {
    const apiKey = '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'; // Replace with your actual key
    const endpoint = 'https://api.openai.com/v1/chat/completions';
    const data = {
        model: "gpt-3.5-turbo",
        messages: [{role: "user", content: userMsg}]
    };
    const response = await fetch(endpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`
        },
        body: JSON.stringify(data)
    });
    const result = await response.json();
    return result.choices[0].message.content;
}

// Usage in sendMessage()
async function sendMessage() {
    // ...add user message to chat...
    const userMsg = chatInput.value.trim();
    // ...existing code...
    const botReply = await getAIResponse(userMsg);
    // ...add botReply to chat...
}