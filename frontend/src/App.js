import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() =>
  {
    fetch('/hello')
    .then(res => res.text())
    .then(text => {setMessage(text); console.log(text)});
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
	  {message}
        </a>
      </header>
    </div>
  );
}

export default App;
