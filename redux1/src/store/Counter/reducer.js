const INITIAL_STATE = {
  counter: 0,
};

export default function (state = 0, action) {
  switch (action.type) {
    case "INCREMENT":
      return ++state;

    default:
      return state;
  }
}
