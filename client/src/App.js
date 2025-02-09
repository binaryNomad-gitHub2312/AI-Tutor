import React, { useState } from 'react';
import CustomChatbot from './components/Chatbot';

function App() {
  const [opened, setOpened] = useState(false);

  const FloatingLabel = {
    position: 'fixed',
    bottom: '100px',
    right: '30px', // Adjust to match chatbot icon alignment
    padding: '10px 20px',
    background: 'linear-gradient(135deg, #9446E5 0%, #5B61F4 100%)',
    color: '#fff',
    borderRadius: '20px',
    boxShadow: '0 2px 12px rgba(148, 70, 229, 0.3)',
    fontWeight: 'bold',
    zIndex: 999,
    animation: 'float 3s ease-in-out infinite',
    cursor: 'pointer' // Optional: adds pointer cursor on hover
  };

  return (
    <div className="App">
      {!opened && <div style={FloatingLabel}>AI Tutor</div>}
      <CustomChatbot opened={opened} setOpened={setOpened} />
    </div>
  );
}

export default App;