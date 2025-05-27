const Application = React.lazy(() => import("application/App"));

import React from "react";

function App() {
  return (
    <div className="App">
      This is our container rendering our MFE below
      <Application />
    </div>
  );
}

export default App;
