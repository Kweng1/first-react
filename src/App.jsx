import { useState } from "react";
import reactLogo from "./assets/react.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>My First React Project</h1>
      <h2>What is react?</h2>
      <br />
      <p>
        React. js is an open-source JavaScript library, crafted with precision
        by Facebook, that aims to simplify the intricate process of building
        interactive user interfaces. Imagine a user interface built with React
        as a collection of components, each responsible for outputting a small,
        reusable piece of HTML code.
      </p>

      <p>1. Kyle Isidoro</p>
      <p>2. Vhaugn Vincent Padigos</p>
    </div>
  );
}

export default App;
