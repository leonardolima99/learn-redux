import React, { useState } from "react";
/* import { connect } from "react-redux"; */
import { useSelector, useDispatch } from "react-redux";

import { sum, subtract } from "../store/Calculator/Calculator.actions";

function Calculator() {
  const dispatch = useDispatch();
  const result = useSelector((state) => state.calculator);
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  return (
    <>
      <input
        type="text"
        placeholder="a"
        value={a}
        onChange={(e) => setA(Number(e.target.value))}
      />
      <input
        type="text"
        placeholder="b"
        value={b}
        onChange={(e) => setB(Number(e.target.value))}
      />

      <button onClick={() => dispatch(sum(a, b))}>somar</button>
      <button onClick={() => dispatch(subtract(a, b))}>subtrair</button>

      <div>{result}</div>
    </>
  );
}

/* function mapStateToProps(state) {
  return {
    result: state.calculator,
  };
} */

/* export default connect(mapStateToProps)(Calculator); */
export default Calculator;
