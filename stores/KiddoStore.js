export default function KiddoStore(state = [], action) {
  switch (action.type) {
    case "SET_KIDDOS":
      return action.payload;
    case "ADD_KIDDO":
      return action.payload;
    case "DELETE_KIDDO":
      return action.payload;
    case "ADD_KIDDO_COMMENT":
      return action.payload;
    case "ERROR":
      return state;
    default:
      return state;
  }
}
