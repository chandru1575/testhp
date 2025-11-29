import { useEffect, useState } from "react";

function App() {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000")
      .then(res => res.text())
      .then(data => setMsg(data));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>React 11 + Node.js 24 Example</h1>
      <p>Backend says: {msg}</p>
    </div>
  );
}

export default App;
