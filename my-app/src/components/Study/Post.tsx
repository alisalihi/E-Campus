import React, { useState, useEffect, ChangeEvent } from 'react';
import './messageApp.css';

interface Message {
  text: string;
  image: string | null;
}

const MessageApp: React.FC = () => {
  const [isSectionVisible, setIsSectionVisible] = useState(false);

  const handleButtonClick = () => {
    setIsSectionVisible(!isSectionVisible);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Toggle Section</button>
      {isSectionVisible && <MessageSection />}
    </div>
  );
};

const MessageSection: React.FC = () => {
  const [message, setMessage] = useState('');
  const [image, setImage] = useState<string | null>(null);
  const [savedMessages, setSavedMessages] = useState<Message[]>([]);

  // useEffect to load messages from local storage on component mount
  useEffect(() => {
    const storedMessages = localStorage.getItem('messages');
    if (storedMessages) {
      setSavedMessages(JSON.parse(storedMessages));
    }
  }, []);

  // useEffect to save messages to local storage whenever the messages state changes
  useEffect(() => {
    localStorage.setItem('messages', JSON.stringify(savedMessages));
  }, [savedMessages]);

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImage(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePostMessage = () => {
    // Add the new message to the array of saved messages
    const newMessage: Message = {
      text: message,
      image: image,
    };

    setSavedMessages([...savedMessages, newMessage]);

    // Clear the message input and image
    setMessage('');
    setImage(null);
  };

  return (
    <div>
      <textarea
        placeholder="Type your message..."
        value={message}
        onChange={handleInputChange}
      />
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {image && (
        <img
          src={image}
          alt="Selected"
          style={{ maxWidth: '100%', maxHeight: '200px', marginTop: '10px' }}
        />
      )}
      <button onClick={handlePostMessage}>Post</button>

      <div>
        <h2>Saved Messages:</h2>
        <ul>
          {savedMessages.map((msg, index) => (
            <li key={index}>
              {msg.text}
              {msg.image && (
                <img
                  src={msg.image}
                  alt="Posted"
                  style={{ maxWidth: '100%', maxHeight: '200px' }}
                />
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MessageApp;
