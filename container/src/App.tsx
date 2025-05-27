import { useState } from "react";
import reactLogo from "./assets/react.svg";

const Application = React.lazy(() => import("application/App"));

import "./App.css";
import React from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      This is our container
      <Application />
    </div>
  );
}

export default App;
