import { useState } from "react";

function App() {
  const [data, setData] = useState<any>(null);

  const handleClick = async () => {
    const response = await fetch("http://localhost:3001/api/hello");
    const json = await response.json();
    setData(json);
  };

  return (
    <div className="app">
      <button onClick={handleClick}>Test Backend Connection</button>
      {data && <div>{data.message}</div>}
    </div>
  );
}

export default App;
