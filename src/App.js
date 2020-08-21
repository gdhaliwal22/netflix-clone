import React from "react";
import "./App.css";
import Row from "./components/Row";

function App() {
  return (
    <div className="App">
      <h1>Netflix Clone</h1>
      <Row title="NETFLIX ORIGINALS" />
      <Row title="Trending Now" />
      <Row title="Action" />
    </div>
  );
}

export default App;
