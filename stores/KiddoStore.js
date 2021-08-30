export default function KiddoStore(state = [], action) {
  switch (action.type) {
    case "SET_KIDDOS":
      return action.kiddos;
    case "ADD_KIDDO":
      return action.newKiddos;
    case "DELETE_KIDDO":
      return action.newKiddos;
    case "ERROR":
      return state;
    default:
      return state;
  }
}
