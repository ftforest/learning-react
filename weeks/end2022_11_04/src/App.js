import logo from './logo.svg';
import './App.css';
import React from "react";
import StartRating from "./StarRating";
import NoteItem from "./NoteItem";
import NoteData from "./node-text.json";
import Star from "./Star";

function App() {
    const [texts, setTexts] = useState(NoteData);
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
      </header>
      <StartRating
          style={{ backgroundColor: "lightblue" }}
          onDoubleClick={e => alert("double click")}
      />
      <NoteItem
          key={10}
          selected={10}
          onSelect={() => (10 + 1)}
      />
    </div>
  );
}

export default App;
