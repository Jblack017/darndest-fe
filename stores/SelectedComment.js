export default function SelectedComment(state = {}, action) {
  switch (action.type) {
    case "SET_SELECTED_COMMENT":
      return action.payload;
    case "CLEAR_SELECTED_COMMENT":
      return action.payload;
    default:
      return state;
  }
}
