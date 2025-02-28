import React, { useState } from 'react';

function ChatSupport() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'user' }]);
      // Logic to send message to backend and get response
      setMessages([...messages, { text: 'This is a test response', sender: 'bot' }]);
      setInput('');
    }
  };

  return (
    <div className="chat-support">
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            {message.text}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
        />
        <button onClick={sendMessage}>
          <span role="img" aria-label="send">
            Send
          </span>
        </button>
      </div>
    </div>
  );
}

export default ChatSupport;