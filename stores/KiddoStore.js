export default function KiddoStore(state = [], action) {
  switch (action.type) {
    case "ADD_KIDDO":
      return action.newKiddos;
    case "SET_KIDDOS":
      return action.kiddos;
    case "DELETE_KIDDO":
      return action.newKiddos;
    default:
      return state;
  }
}
