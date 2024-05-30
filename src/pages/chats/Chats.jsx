import React, { useState } from 'react';
import Topbar from '../../components/topbar/Topbar';
import { Users } from '../../dummyData';
import './Chats.css';
import Sidebar from '../../components/sidebar/Sidebar';

const initialMessages = Users.reduce((acc, user) => {
  acc[user.id] = [];
  return acc;
}, {});

const Chat = () => {
  const [activeFriendId, setActiveFriendId] = useState(Users[0].id);
  const [messages, setMessages] = useState(initialMessages);
  const [newMessage, setNewMessage] = useState('');

  const handleFriendClick = (id) => {
    setActiveFriendId(id);
  };

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages({
        ...messages,
        [activeFriendId]: [
          ...messages[activeFriendId],
          { sender: 'You', text: newMessage },
        ],
      });
      setNewMessage('');
    }
  };

  return (
    <>
      <Topbar />
      <div className="contentContainer">
        
      <Sidebar/>
        <div className="chatContainer">
          <div className="friendsList">
            <h2>Friends</h2>
            <ul>
              {Users.map((friend) => (
                <li
                  key={friend.id}
                  className={`friendItem ${activeFriendId === friend.id ? 'active' : ''}`}
                  onClick={() => handleFriendClick(friend.id)}
                >
                  <img src={friend.profilePicture} alt={friend.username} />
                  {friend.username}
                </li>
              ))}
            </ul>
          </div>
          <div className="chatWindow">
            <h2>Chat with {Users.find(friend => friend.id === activeFriendId)?.username}</h2>
            <div className="messages">
              {messages[activeFriendId].map((msg, index) => (
                <div key={index} className={`message ${msg.sender === 'You' ? 'sent' : 'received'}`}>
                  <p><strong>{msg.sender}:</strong> {msg.text}</p>
                </div>
              ))}
            </div>
            <div className="inputContainer">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type a message"
              />
              <button onClick={handleSendMessage}>Send</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
