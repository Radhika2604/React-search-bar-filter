import { useState } from "react";
import "./App.css";
import SearchBarReasult from "./components/SearchBarReasult";
import SearchBar from "./components/searchBar";

function App() {
  const [results, setResults] = useState([]);
  return (
    <div className="App">
      <div className="search-bar-container">
        <SearchBar setResults={setResults} />
        <SearchBarReasult results={results} />
      </div>
    </div>
  );
}

export default App;
