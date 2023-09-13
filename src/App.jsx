import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./index.css";
import User from "./components/User";
import Owner from "./components/Owner";
import Normal from "./components/Normal";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Normal />
    </>
  );
}

export default App;
