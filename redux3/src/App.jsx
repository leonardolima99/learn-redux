import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import { useDispatch, useSelector } from "react-redux";
import { selectCount } from "./store/Counter/selectors";
import { asyncIncrement, asyncDecrement } from "./store/Counter.store";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter);

  return (
    <div className="App">
      <header className="App-header">
        <p>{count.value}</p>
        <p>
          <button type="button" onClick={() => dispatch(asyncIncrement())}>
            Sum
          </button>
          <button onClick={() => dispatch(asyncDecrement())}>Subtract</button>
        </p>
      </header>
    </div>
  );
}

export default App;
