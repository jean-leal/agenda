import { useState } from 'react'
import './App.css'

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function confirmLogin (email) {
    console.log(email)
  }

  return (
    <div className="App">
      <div className="container">
        <div>
          <div>E-mail</div>
          <input 
            type="text" 
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
          />
        </div>
        <div>
          <div>Senha</div>
          <input type="password"/>
        </div>
        <div>
          <button onClick={confirmLogin(email)}>Entrar</button>
        </div>
      </div>
    </div>
  )
}

export default App
