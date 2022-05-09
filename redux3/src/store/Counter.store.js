import { createSlice } from "@reduxjs/toolkit";

const counter = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment(state) {
      state.value += 1;
    },

    decrement(state) {
      state.value -= 1;
    },
  },
});

export const { decrement, increment } = counter.actions;
export default counter.reducer;

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function asyncIncrement() {
  return async function (dispatch) {
    await sleep(2000);
    dispatch(increment());
  };
}

export function asyncDecrement() {
  return async function (dispatch) {
    await sleep(2000);
    dispatch(decrement());
  };
}
