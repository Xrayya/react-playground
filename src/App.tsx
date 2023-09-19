import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./global.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-regular-svg-icons";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-4">
      <div className="flex flex-col items-center">
        <div className="flex justify-evenly">
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1 className="text-2xl m-6">Vite + React</h1>
        <div className="p-4 flex flex-col items-center gap-4">
          <button
            className="rounded-md py-1 px-2 bg-gray-400"
            onClick={() => setCount((count) => count + 1)}
          >
            <FontAwesomeIcon icon={faPlusSquare} /> count is {count}
          </button>
          <p>
            Edit{" "}
            <code className="bg-gray-300 rounded-sm p-0.5">src/App.tsx</code>{" "}
            and save to test HMR
          </p>
          <p className="text-gray-50">
            Click on the Vite and React logos to learn more
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
