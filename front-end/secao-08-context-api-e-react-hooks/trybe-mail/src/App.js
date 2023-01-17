import { useState, useEffect } from 'react';
import './App.css';
import messagesList from './data/messagesList';
import Email from './components/Email';
import Controls from './components/Controls';

import { READ, UNREAD } from './constants';


function App() {
  const [messages, setMessages] = useState(messagesList);

  useEffect(() => {
    const isAllMessagesRead = messages.every(({ status }) => status === READ);
  
    if (isAllMessagesRead) {
      alert('Parabéns! Você leu todas suas mensagens!');
    }
  }, [messages]);

  const setMessageStatus = (messageId, newStatus) => {
    const updatedMessages = messages.map((currentMessage) => {
      if (currentMessage.id === messageId) {
        return { ...currentMessage, status: newStatus };
      }
      return currentMessage;
    });

    setMessages(updatedMessages);
  };

  const markAllAsRead = () => {
    const allAsRead = messages.map((m) => ({ ...m, status: READ }));
    setMessages(allAsRead);
  };

  const markAllAsUnread = () => {
    const allAsRead = messages.map((m) => ({ ...m, status: UNREAD }));
    setMessages(allAsRead);
  };

  return (
    <div className="App">
      <h1 className='Title'>TrybeMail</h1>
      <Email
        messages={ messages }
        setMessageStatus={ setMessageStatus }
      />
      <Controls
        markAllAsRead={ markAllAsRead }
        markAllAsUnread={ markAllAsUnread }
      />
    </div>
  );
}

export default App;
