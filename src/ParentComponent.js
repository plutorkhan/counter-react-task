import { useState } from "react";
import Counter from "./Counter";
import RandomList from "./RandomList";

function ParentComponent() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <button onClick={() => setCounter((count) => count + 1)}>
        increment
      </button>
      <Counter counter={counter} setCounter={setCounter} />
      <RandomList randomNumber={counter} />
    </div>
  );
}

export default ParentComponent;
