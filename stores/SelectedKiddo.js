export default function SelectedKiddo(state = {}, action) {
  switch (action.type) {
    case "SET_SELECTED_KIDDO":
      return action.payload;
    case "CLEAR_SELECTED_KIDDO":
      return action.payload;
    default:
      return state;
  }
}
