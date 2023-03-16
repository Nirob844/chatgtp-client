import './App.css';
import './normal.css';
import { useState } from 'react'

function App() {

  const [input, setInput] = useState('');
  const [chatLog, setChatLog] = useState([{
    user: "user",
    message: "how can i help you"
  },
  {
    user: 'me',
    message: 'i want to use chatgpt'
  }]);

  async function handleSubmit(e) {
    e.preventDefault();
    setChatLog([...chatLog, { user: "me", message: `${input}` }])
    setInput('');
  }


  return (
    <div className="App">
      <aside className="sidemenu">
        <div className="side-menu-button">
          <span>+ New Chat</span>
        </div>
      </aside>
      <section className="chatbox">
        <div className="chat-log">

          {chatLog.map((message, index) => (
            <ChatMessage key={index} message={message} />
          ))}

        </div>



        <div className="chat-input-holder">
          <form onSubmit={handleSubmit}>
            <input
              rows='1'
              name='input'
              value={input}
              onChange={(e) => setInput(e.target.value)}
              //onChange={({ target: { value } }) => setInput(value)}
              className="chat-input-text-area"
            ></input>
          </form>
        </div>
      </section>
    </div>
  );
}

const ChatMessage = ({ message }) => {

  return (
    <div className={`chat-message ${message.user = 'gpt' && "chatgpt"}`}>
      <div className="chat-message-center">
        <div className={`avatar ${message.user = 'gpt' && "chatgpt"}`}>

        </div>
        <div className="message">
          {message.message}

        </div>
      </div>
    </div>

  )
}

export default App;
