import { useSelector, useDispatch } from "react-redux";
import { increment } from "./store/Counter/actions";
import { selectCounts } from "./store/Counter/selectors";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const count = useSelector(selectCounts);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => dispatch(increment())}>
            count is: {count}
          </button>
        </p>
      </header>
    </div>
  );
}

export default App;
