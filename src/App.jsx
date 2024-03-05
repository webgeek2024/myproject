import { useState } from "react";
import Blog from "./assets/Components/Blog";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Blog />
    </>
  );
}

export default App;
