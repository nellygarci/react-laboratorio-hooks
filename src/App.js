import logo from './logo.svg';
import './App.css';
import Contador from './Components/Contador';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
         <h1> Inicio del contador</h1>
         <Contador/>
      </header>
    </div>
  );
}

export default App;
