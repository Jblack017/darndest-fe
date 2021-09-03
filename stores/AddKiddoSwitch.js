export default function AddKiddoSwitch(state = false, action) {
  switch (action.type) {
    case "OPEN_ADD_KIDDO":
      return action.payload;
    case "CLOSE_ADD_KIDDO":
      return action.payload;
    default:
      return state;
  }
}
