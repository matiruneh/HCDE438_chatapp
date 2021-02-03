import { useState } from 'react';
import './App.css';
import TextInput from './Textinput.js';
import Message from './Message'

function App() {
  const [messages, setMessages] = useState([{text:'hello'}])

  return <div className="App">
      <header className="header">
        <div className="logo" />
        MyChat
      </header>c
        
      <main className="messages">
      {messages.map((m,i)=> {
        return <Message key={i} {...m} />
      })}
      </main>

      <TextInput send={t=> setMessages([{text:t, date:new Date()}, ...messages])}/>

    </div>;
}

export default App;
