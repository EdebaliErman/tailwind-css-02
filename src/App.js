import { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  const [head, setHead] = useState()
  return (
    <div className="App">
      <Navbar head={setHead} />
      {head}
    </div>
  );
}

export default App;
