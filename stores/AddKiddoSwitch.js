export default function AddKiddoSwitch(state = false, action) {
  switch (action.type) {
    case "IS_ADD_KIDDO_OPEN":
      return action.payload;
    default:
      return state;
  }
}
