export default function (state = 0, actions) {
  switch (actions.type) {
    case "INCREMENT":
      return actions.payload + state;

    default:
      return state;
  }
}
