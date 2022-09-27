import logo from './logo.svg';
import './App.css';
import Logic from './Logic';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Logic style={{ border: '3px white solid', fontSize: 45, margin: '0 auto' }} />
      </header>

    </div>
  );
}

export default App;
