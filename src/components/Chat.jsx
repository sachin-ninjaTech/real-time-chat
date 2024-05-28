import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import {
  onSnapshot,
  collection,
  query,
  orderBy,
  serverTimestamp,
  addDoc,
  Timestamp,
} from "firebase/firestore";
import "../style/style.css";
import { formatRelative } from "date-fns";
// At the top of your component file

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    const messagesRef = collection(db, "messages");
    const q = query(messagesRef, orderBy("createAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const messagesData = snapshot.docs.map((doc) => doc.data());
      setMessages(messagesData);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (newMessage.trim() !== "") {
      const newMessageRef = await addDoc(collection(db, "messages"), {
        text: newMessage,
        createAt: serverTimestamp(),
      });
      setNewMessage("");

      // Append the new message to the end of the messages array
      setMessages([
        ...messages,
        {
          id: newMessageRef.id,
          text: newMessage,
          createAt: Timestamp.now(),
        },
      ]);
    }
  };
  const formatDate = (date) => {
    let formattedDate = "";
    if (date) {
      // Convert the date in words relative to the current date
      formattedDate = formatRelative(date, new Date());
      // Uppercase the first letter
      formattedDate =
        formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
    }
    return formattedDate;
  };

  return (
    <div className="chat-container">
      {/* Header */}
      <header className="header">
        <h1>React FireChat</h1>
      </header>

      {/* Chat Area */}
      <div className="chat-area">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`message ${message.isOwn ? "own" : "other"}`}
          >
            <div>
              <p>{message.text}</p>
            </div>
            <div className="message-time">
              <small>{formatDate(message.createAt?.toDate())}</small>
            </div>
          </div>
        ))}
      </div>

      {/* Input Area */}
      {/* <div className="input-area">
        <form onSubmit={handleOnSubmit} className="input-area">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message here..."
            className="input-area-input"
          />
          <button
            type="submit"
            disabled={!newMessage}
            className="input-area-button"
          >
            <FontAwesomeIcon icon={faPaperPlane} />
          </button>
        </form>
      </div> */}
      <form onSubmit={handleOnSubmit} className="input-area">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message here..."
        />
        <button type="submit" disabled={!newMessage}>
          Send
        </button>
      </form>
    </div>
  );
};

export default Chat;
