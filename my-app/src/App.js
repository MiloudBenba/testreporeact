import React from "react";
import "./App.css";
import Navbar from "./conponents/Navbar";
import Test from "./conponents/Test";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <header className="App-header">
          <Test />
        </header>
      </div>
    </>
  );
}

export default App;
