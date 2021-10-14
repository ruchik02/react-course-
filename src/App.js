import logo from './logo.svg';
import './App.css';

function App() {
  const name="Ruchika";
  
  return (
    <h1>How are You ?</h1>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World {new Date().toDateString()}
        </p>
        { <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> }
      </header>
    </div>
  );
}

export default App;
