import './App.css';
import './normal.css';
import { useState } from 'react'

function App() {

  const [input, setInput] = useState('');
  const [chatLogo, setChatLogo] = useState([{
    user: 'gtp',
    message: 'how can i help you'
  },
  {
    user: 'me',
    message: 'i want to use chatgpt'
  }]);

  async function handleSubmit(e) {
    e.preventDefault();
    setChatLogo([...chatLogo, { user: "me", message: `${input}` }])
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
          {
            chatLogo.map((message, index) => {
              <ChatMessage
                key={index}
                message={message} />
            })

          }

          {/* <div className="chat-message chatgpt">
            <div className="chat-message-center">
              <div className="avatar chatgpt">

              </div>
              <div className="message">
                I am AI
              </div>
            </div>
          </div> */}
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
    <div className={`chat-message ${message.user === 'gtp' && "chatgpt"}`}>
      <div className="chat-message-center">
        <div className={`avater ${message.user === 'gtp' && "chatgpt"}`}>
          {message.user === 'gtp'}
        </div>
        <div className="message">
          {message.message}
          <h1>hiiiiii</h1>
        </div>
      </div>
    </div>
  )
}

export default App;
