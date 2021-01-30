import { useState } from 'react';
import './App.css';
import TextInput from './Textinput.js';

function App() {
  const [messages, setMessages] = useState([{text:'hello'}])

  return <div className="App">
      <header className="header">
        <div className="logo" />
        MyChat
      </header>
        
      <section className="message">
        {messages[0].text}
      </section>

      <TextInput send={t=> setMessages([{text:t}])}/>

    </div>;
}

export default App;
